<template>
  <template v-if="hasPermission(['report.group'])">
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
            <n-button @click="availableGroupsFormModal = true">
              Generar reporte
            </n-button>
          </template>
          <n-thing
            title="Grupos Habilitados"
            description="Grupos habilitados por periodo"
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
        <n-list-item>
          <template #suffix>
            <n-button @click="attendanceTemplateFormModal = true">
              Generar reporte
            </n-button>
          </template>
          <n-thing
            title="Plantilla de Asistencia"
            description="Plantilla de asistencia para grupos"
          />
        </n-list-item>
      </n-list>
    </n-card>
    <AttendanceGroups
      v-model="attendanceTemplateFormModal"
      :curriculumOptions="curriculumOptions"
    />
    <GroupEnrollmentForm
      v-model="groupEnrollmentFormModal"
      :curriculumOptions="curriculumOptions"
    />
    <EnabledGroupsForm v-model="enabledGroupsFormModal" />
    <CollectionGroupsForm v-model="collectionGroupsFormModal" />
    <AvailableGroupsForm v-model="availableGroupsFormModal" />
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import type { SelectOption } from "naive-ui";

import AttendanceGroups from "@/app/modules/Reports/components/Forms/Group/AttendanceGroups.vue";
import AvailableGroupsForm from "@/app/modules/Reports/components/Forms/Group/AvailableGroups.vue";
import EnabledGroupsForm from "@/app/modules/Reports/components/Forms/Group/EnabledGroups.vue";
import GroupEnrollmentForm from "@/app/modules/Reports/components/Forms/Group/Enrollments.vue";
import CollectionGroupsForm from "@/app/modules/Reports/components/Forms/Group/CollectionGroups.vue";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();

const curriculumOptions = ref<SelectOption[]>([]);

const enabledGroupsFormModal = ref<boolean>(false);
const availableGroupsFormModal = ref<boolean>(false);
const groupEnrollmentFormModal = ref<boolean>(false);
const collectionGroupsFormModal = ref<boolean>(false);
const attendanceTemplateFormModal = ref<boolean>(false);

const initView = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initView();
</script>
