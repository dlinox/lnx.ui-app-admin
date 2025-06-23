<template>
  <n-button @click="showModal = true"> NOTAS </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 1200px"
      :title="`INGRESO DE NOTAS: ${group?.course} - ${group?.group}`"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
      class="no-padding"
    >
      <n-table :bordered="false" :single-line="true" size="small">
        <thead>
          <tr>
            <th>N°</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Nombre</th>
            <th style="width: 120px" v-for="index in group.units" :key="index">
              <span v-if="group.gradingModel == 1">
                <template v-if="index == 1"> Prom. Cap. </template>
                <template v-else> Act. </template>
              </span>
              <span v-else> Unidad {{ index }} </span>
            </th>
            <th style="width: 120px">Nota final</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in grades" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.lastNameFather }}</td>
            <td>{{ student.lastNameMother }}</td>
            <td>{{ student.name }}</td>
            <td v-for="(grade, i) in student.gradeUnits" :key="i">
              <n-input-number
                v-if="group.gradingModel == 1 && grade.order == 2"
                v-model:value="grade.grade"
                placeholder="0.00"
                :max="2"
                :min="0"
                @update:value="updateFinalGrade(index)"
              ></n-input-number>

              <n-input-number
                v-else
                v-model:value="grade.grade"
                placeholder="0.00"
                :precision="2"
                :max="20"
                :min="0"
                @update:value="updateFinalGrade(index)"
              ></n-input-number>
            </td>
            <td class="border-s">
              <n-input-number
                v-model:value="student.finalGrade"
                placeholder="0.00"
                :class="student.finalGrade < 11 ? 'text-red' : ''"
                :precision="0"
                :min="0"
                :max="20"
                readonly
                :show-button="false"
              ></n-input-number>
            </td>
          </tr>
        </tbody>
      </n-table>
      <template #footer>
        <n-space justify="end">
          <n-button
            tertiary
            size="large"
            @click="showModal = false"
            :disabled="loading"
          >
            Cancelar
          </n-button>
          <n-button
            size="large"
            type="primary"
            v-permission="['enrollment-grade.create']"
            @click="
              dialog.warning({
                title: 'Confirmar: ' + group?.course + ' - ' + group?.group,
                content: '¿Está seguro que desea guardar los cambios?',
                positiveText: 'Guardar',
                negativeText: 'Cancelar',
                closable: false,
                showIcon: false,
                negativeButtonProps: {
                  type: 'tertiary',
                  size: 'large',
                },
                positiveButtonProps: {
                  size: 'large',
                  type: 'info',
                },
                onPositiveClick: () => {
                  handleSubmit();
                },
              })
            "
            :loading="loading"
          >
            Guardar
          </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

import { useDialog } from "naive-ui";
import {
  _getPriceInitValues,
  _getPriceRules,
} from "@/app/modules/CoursePrice/configs/form.configs";

import {
  _getGradeStudents,
  _saveGradeStudents,
} from "@/app/modules/Grade/services/grade.services";

const props = defineProps<{
  groupId: number;
}>();

const dialog = useDialog();
const showModal = ref<boolean>(false);
const loading = ref<boolean>(false);
const grades = ref<any[]>([]);
const group = ref<any>({});

const updateFinalGrade = (index: number) => {
  let student = grades.value[index];

  if (group.value.gradingModel == 1) {
    let capacityGrades = student.gradeUnits.filter((g: any) => g.order !== 2); // Excluir actitud
    let totalCapacity = capacityGrades.reduce(
      (sum: number, g: any) => sum + (parseFloat(g.grade) || 0),
      0
    );

    let capacityAverage =
      capacityGrades.length > 0 ? totalCapacity / capacityGrades.length : 0;

    let attitudeUnit = student.gradeUnits.find((g: any) => g.order === 2);
    let attitude = attitudeUnit ? attitudeUnit.grade || 0 : 0;
    student.finalGrade = Number(capacityAverage * 0.9 + attitude);
    student.finalGrade = Math.round(student.finalGrade);
  } else if (group.value.gradingModel == 2) {
    let totalGrades = student.gradeUnits.reduce(
      (sum: number, g: any) => sum + (Number(g.grade) || 0),
      0
    );
    let unitCount = student.gradeUnits.length;

    student.finalGrade = unitCount > 0 ? Number(totalGrades / unitCount) : 0;
    student.finalGrade = Math.round(student.finalGrade);
  }
};

const mapRequestGrade = () => {
  return grades.value.map((student) => {
    return {
      enrollmentGroupId: student.id,
      studentId: student.studentId,
      gradeId: student.gradeId,
      finalGrade: student.finalGrade,
      gradeUnits: student.gradeUnits.map((unit: any) => {
        return {
          id: unit.id,
          grade: unit.grade,
          order: unit.order,
        };
      }),
    };
  });
};

const handleSubmit = async () => {
  loading.value = true;
  const grades = mapRequestGrade();
  const response = await _saveGradeStudents({ grades: grades });
  if (response) {
    showModal.value = false;
  }
  loading.value = false;
};

const init = async () => {
  loading.value = true;
  let response = await _getGradeStudents(props.groupId);
  if (!response) {
    loading.value = false;
    return;
  }
  grades.value = response.grades;
  group.value = response.group;

  loading.value = false;
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
