<template>
  <template v-if="hasPermission(['report.student'])">
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500"> Reportes </span>
        <h5 class="text-lg font-bold text-slate-800">Reporte de estudiantes</h5>
      </template>
      <n-list>
        <n-list-item>
          <template #suffix>
            <n-button @click="studentEnrollmentFormModal = true">
              Generar reporte
            </n-button>
          </template>
          <n-thing title="Matrículas" description="Registro de matrículas" />
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button @click="studentGradesFormModal = true">
              Generar reporte
            </n-button>
          </template>
          <n-thing title="Notas" description="Registro de notas" />
        </n-list-item>
        <!-- <n-list-item>
        <template #suffix>
          <n-button>Generar reporte</n-button>
        </template>
        <n-thing title="Asistencias" description="Registro de asistencias" />
      </n-list-item>

      <n-list-item>
        <template #suffix>
          <n-button>Generar reporte</n-button>
        </template>
        <n-thing title="Pagos" description="Registro de pagos" />
      </n-list-item> -->
      </n-list>
    </n-card>
    <StudentEnrollmentForm v-model="studentEnrollmentFormModal" />
    <StudentGradesForm v-model="studentGradesFormModal" />
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import StudentEnrollmentForm from "@/app/modules/Reports/components/Forms/Student/Enrollments.vue";
import StudentGradesForm from "@/app/modules/Reports/components/Forms/Student/Grades.vue";
import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const studentEnrollmentFormModal = ref<boolean>(false);
const studentGradesFormModal = ref<boolean>(false);
</script>
