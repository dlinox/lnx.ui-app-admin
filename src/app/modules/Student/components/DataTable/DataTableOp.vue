<template>
  <n-dropdown :options="options" placement="bottom-start">
    <n-button>
      <LnxIcon icon-name="setting-5" size="20" />
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { useDialog } from "naive-ui";
import { usePermission } from "@/core/composables/usePermission";
import LnxIcon from "@/core/components/LnxIcon.vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { computed } from "vue";

const emit = defineEmits(["edit", "delete", "create-user"]);
const dialog = useDialog();

const { hasPermission } = usePermission();
const props = defineProps<{
  item: any;
}>();

const options = computed(() => [
  {
    show: props.item.userId == null && hasPermission([""]),
    label: "Crear cuenta de usuario",
    id: "create-user",
    key: "create-user",
    icon: renderIcon("security-user"),
    props: {
      onClick: () => emit("create-user"),
    },
  },
  {
    show: hasPermission([""]),
    label: "Editar",
    key: "edit",
    icon: renderIcon("edit-2"),
    props: {
      onClick: () => emit("edit"),
    },
  },
  {
    show: hasPermission([""]),
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
          showIcon: true,
          negativeButtonProps: {
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
]);
</script>
