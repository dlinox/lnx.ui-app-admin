<template>
  <n-dropdown
    :options="options"
    placement="bottom-start"
    v-if="
      item.roleName === 'docente'
        ? hasPermission(['user-teacher.edit', 'user-teacher.delete'])
        : item.roleName === 'estudiante'
        ? hasPermission(['user-student.edit', 'user-student.delete'])
        : hasPermission(['user-admin.edit', 'user-admin.delete'])
    "
  >
    <n-button>
      <LnxIcon icon-name="setting-5" size="20" />
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { useDialog } from "naive-ui";
import LnxIcon from "@/core/components/LnxIcon.vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { usePermission } from "@/core/composables/usePermission";
import { computed } from "vue";
const { hasPermission } = usePermission();
const dialog = useDialog();

const emit = defineEmits(["edit", "delete"]);

const propsd = defineProps<{
  item: any;
}>();

const options = computed(() => [
  {
    label: "Editar",
    key: "edit",
    icon: renderIcon("edit-2"),
    show:
      propsd.item.roleName === "docente"
        ? hasPermission(["user-teacher.edit"])
        : propsd.item.roleName === "estudiante"
        ? hasPermission(["user-student.edit"])
        : hasPermission(["user-admin.edit"]),
    props: {
      onClick: () => emit("edit"),
    },
  },
  {
    label: "Eliminar",
    key: "delete",
    icon: renderIcon("trash", "red"),
    show:
      propsd.item.roleName === "docente"
        ? hasPermission(["user-teacher.delete"])
        : propsd.item.roleName === "estudiante"
        ? hasPermission(["user-student.delete"])
        : hasPermission(["user-admin.delete"]),
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
]);
</script>
