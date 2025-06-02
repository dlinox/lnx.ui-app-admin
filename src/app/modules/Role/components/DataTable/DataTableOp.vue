<template>
  <n-dropdown
    :options="options"
    placement="bottom-start"
    v-if="
      hasPermission([
        'role-admin.edit',
        'role-admin.delete',
        'role-admin.assign-permissions',
      ])
    "
  >
    <n-button>
      <LnxIcon icon-name="setting-5" size="20" />
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import LnxIcon from "@/core/components/LnxIcon.vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { useDialog } from "naive-ui";

import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();

const dialog = useDialog();

const emit = defineEmits(["edit", "delete", "permissions"]);

defineProps<{
  item: any;
}>();

const options = [
  {
    label: "Asignar permisos",
    key: "assign-permissions",
    icon: renderIcon("security-safe"),
    show: hasPermission(["role-admin.assign-permissions"]),
    props: {
      onClick: () => emit("permissions"),
    },
  },
  {
    label: "Editar",
    key: "edit",
    icon: renderIcon("edit-2"),
    show: hasPermission(["role-admin.edit"]),
    props: {
      onClick: () => emit("edit"),
    },
  },
  {
    label: "Eliminar",
    key: "delete",
    icon: renderIcon("trash", "red"),
    show: hasPermission(["role-admin.delete"]),
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
