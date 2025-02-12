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
import { useRouter } from "vue-router";
import { useDialog } from "naive-ui";
const dialog = useDialog();

const emit = defineEmits(["edit", "delete", "curriculum"]);

const props = defineProps<{
  item: any;
}>();

const router = useRouter();

const options = [
  {
    label: "Gestionar cursos",
    key: "CurriculumCourse",
    icon: renderIcon("grid-2"),
    props: {
      onClick: () =>
        router.push({
          name: "CurriculumCourse",
          params: { id: props.item.id },
        }),
    },
  },
  {
    label: "Editar",
    key: "edit",
    icon: renderIcon("edit-2"),
    props: {
      onClick: () => emit("edit"),
    },
  },
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
