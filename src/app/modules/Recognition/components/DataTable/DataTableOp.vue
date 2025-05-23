<template>
  <n-dropdown :options="options" placement="bottom-start">
    <n-button>
      <LnxIcon icon-name="setting-5" size="20" />
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import LnxIcon from "@/core/components/LnxIcon.vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { useDialog } from "naive-ui";
const dialog = useDialog();

const emit = defineEmits(["edit", "delete"]);

defineProps<{
  item: any;
}>();

const options = [
  {
    label: "Eliminar",
    key: "delete",
    icon: renderIcon("trash", "red"),
    props: {
      style: {
        color: "red",
      },
      onClick: () => {
        dialog.warning({
          title: "Confirmar",
          content: "¿Está seguro que desea eliminar este registro?",
          positiveText: "Eliminar",
          negativeText: "Cancelar",
          closable: false,
          showIcon: false,
          negativeButtonProps: {
            type: "tertiary",
            size: "large",
          },
          positiveButtonProps: {
            size: "large",
            type: "error",
          },
          onPositiveClick: () => {
            emit("delete");
          },
        });
      },
    },
  },
];
</script>

