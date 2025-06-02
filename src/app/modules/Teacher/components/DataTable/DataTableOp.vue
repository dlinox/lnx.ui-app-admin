<template>
  <n-dropdown :options="options" placement="bottom-start">
    <n-button>
      <LnxIcon icon-name="setting-5" size="20" />
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDialog } from "naive-ui";

import LnxIcon from "@/core/components/LnxIcon.vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { usePermission } from "@/core/composables/usePermission";

const emit = defineEmits(["edit", "delete", "createUser"]);
const dialog = useDialog();
const { hasPermission } = usePermission();

const props = defineProps<{
  item: any;
}>();

const options = computed(() => [
  {
    show: props.item.userId == null && hasPermission(["teacher.create-account"]),
    label: "Crear cuenta de usuario",
    id: "create-user",
    key: "create-user",
    icon: renderIcon("security-user"),
    props: {
      onClick: () => emit("createUser"),
    },
  },
  {
    label: "Editar",
    key: "edit",
    icon: renderIcon("edit-2"),
    props: {
      onClick: () => emit("edit"),
    },
    show: hasPermission(["teacher.edit"]),
  },
  {
    label: "Eliminar",
    key: "delete",
    icon: renderIcon("trash", "red"),
    show: hasPermission(["teacher.delete"]),
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
