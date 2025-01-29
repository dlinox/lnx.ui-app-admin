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

const emit = defineEmits(["edit", "delete"]);

const props = defineProps<{
  item: any;
}>();

const router = useRouter();

const options = [
  {
    label: "Cursos",
    key: "CurriculumModuleCourse",
    icon: renderIcon("grid-2"),
    props: {
      onClick: () =>
        router.push({
          name: "CurriculumModuleCourse",
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
      onClick: () => emit("delete"),
    },
  },
];
</script>
