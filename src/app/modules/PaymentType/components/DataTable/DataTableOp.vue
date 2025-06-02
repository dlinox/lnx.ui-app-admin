<template>
  <n-dropdown
    :options="options"
    placement="bottom-start"
    v-if="hasPermission(['payment-type.edit', 'payment-type.delete'])"
  >
    <n-button>
      <LnxIcon icon-name="setting-5" size="20" />
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import LnxIcon from "@/core/components/LnxIcon.vue";
import { useDialog } from "naive-ui";
import { renderIcon } from "@/core/utils/icon.utils";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const dialog = useDialog();

const emit = defineEmits(["edit", "delete"]);

defineProps<{
  item: any;
}>();

const options = [
  {
    label: "Editar",
    key: "edit",
    icon: renderIcon("edit-2"),
    show: hasPermission(["payment-type.edit"]),
    props: {
      onClick: () => emit("edit"),
    },
  },
  {
    label: "Eliminar",
    key: "delete",
    icon: renderIcon("trash", "red"),
    show: hasPermission(["payment-type.delete"]),
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
            secondary: true,
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
