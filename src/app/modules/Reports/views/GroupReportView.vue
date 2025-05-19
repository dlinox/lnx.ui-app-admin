<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Reportes </span>
      <h5 class="text-lg font-bold text-slate-800">Reporte de grupos</h5>
    </template>
    <n-list>
      <n-list-item>
        <template #suffix>
          <n-button @click="groupEnrollmentFormModal = true">
            Generar reporte
          </n-button>
        </template>
        <n-thing
          title="Matrículas"
          description="Estudiantes matriculados en un grupo"
        />
      </n-list-item>
      <n-list-item>
        <template #suffix>
          <n-button @click="enabledGroupsFormModal = true">
            Generar reporte
          </n-button>
        </template>
        <n-thing
          title="Grupos Aperturados"
          description="Grupos aperturados por periodo"
        />
      </n-list-item>

      <n-list-item>
        <template #suffix>
          <n-button @click="collectionGroupsFormModal = true">
            Generar reporte
          </n-button>
        </template>
        <n-thing
          title="Recaudación por grupo"
          description="Recaudación por grupo en un periodo"
        />
      </n-list-item>
    </n-list>
  </n-card>
  <GroupEnrollmentForm
    v-model="groupEnrollmentFormModal"
    :curriculumOptions="curriculumOptions"
  />
  <EnabledGroupsForm v-model="enabledGroupsFormModal" />
  <CollectionGroupsForm v-model="collectionGroupsFormModal" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import GroupEnrollmentForm from "@/app/modules/Reports/components/Forms/Group/Enrollments.vue";
import EnabledGroupsForm from "../components/Forms/Group/EnabledGroups.vue";
import type { SelectOption } from "naive-ui";
import CollectionGroupsForm from "../components/Forms/Group/CollectionGroups.vue";

const curriculumOptions = ref<SelectOption[]>([]);

const groupEnrollmentFormModal = ref<boolean>(false);
const enabledGroupsFormModal = ref<boolean>(false);
const collectionGroupsFormModal = ref<boolean>(false);

const initView = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initView();
</script>
