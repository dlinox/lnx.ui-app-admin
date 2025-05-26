<template>
  <n-dropdown
    trigger="click"
    :options="options"
    :show-arrow="true"
    @select="handleSelect"
  >
    <n-button :render-icon="renderIcon('magicpen')"> Opt. </n-button>
  </n-dropdown>
</template>
<script setup lang="ts">
import { renderIcon } from "@/core/utils/icon.utils";
import { computed } from "vue";
import {
  _enrollmentGroupReserved,
  _enrollmentGroupCancel,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { useDialog } from "naive-ui";
const dialog = useDialog();

const emit = defineEmits([
  "changeGroup",
  "reserveEnrollment",
  "cancelEnrollment",
  "resetEnrollment",
]);
const props = defineProps<{
  item: any;
}>();

const handleSelect = async (option: any) => {
  switch (option) {
    case "change-group":
      emit("changeGroup", props.item);
      break;
    case "reserve-enrollment":
      dialog.warning({
        title: "Confirmar",
        content: "¿Está seguro de realizar la reserva de la matrícula?",
        positiveText: "Reservar",
        negativeText: "Cancelar",
        closable: false,
        showIcon: false,
        negativeButtonProps: {
          secondary: true,
          type: "tertiary",
          size: "large",
        },
        positiveButtonProps: {
          size: "large",
          type: "primary",
        },
        bordered: true,
        onPositiveClick: async () => {
          await _enrollmentGroupReserved(props.item);
          emit("reserveEnrollment", props.item);
        },
      });

      break;
    case "cancel-enrollment":
      dialog.warning({
        title: "Confirmar",
        content: "¿Está seguro de cancelar la matrícula?",
        positiveText: "Cancelar matrícula",
        negativeText: "Cancelar",
        closable: false,
        showIcon: false,
        negativeButtonProps: {
          secondary: true,
          type: "tertiary",
          size: "large",
        },
        positiveButtonProps: {
          size: "large",
          type: "error",
        },
        onPositiveClick: async () => {
          await _enrollmentGroupCancel(props.item);
          emit("cancelEnrollment", props.item);
        },
      });
      break;
    case "reset-enrollment":
      emit("resetEnrollment", props.item);
      break;
  }
};
const options = computed(() => [
  {
    label: "Cambiar grupo",
    key: "change-group",
    disabled: props.item?.enrollmentStatus !== "MATRICULADO",
  },
  {
    label: "Reservar matrícula",
    key: "reserve-enrollment",
    disabled: props.item?.enrollmentStatus !== "MATRICULADO",
  },
  {
    label: "Cancelar matrícula",
    key: "cancel-enrollment",
    disabled: props.item?.enrollmentStatus == "CANCELADO",
  },
  {
    label: "Reestablecer matrícula",
    key: "reset-enrollment",
    disabled:
      props.item?.enrollmentStatus !== "CANCELADO" &&
      props.item?.enrollmentStatus !== "RESERVADO",
  },
]);
</script>
