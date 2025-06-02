<template>
  <n-modal v-model:show="showModal" class="content-table">
    <n-card
      style="width: 600px"
      :title="`Estudiantes Matriculados`"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
    >
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>N°</th>
            <th>Estudiante</th>
            <th>Celular</th>
            <th>Correo</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ student.student }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.email }}</td>
          </tr>
        </tbody>
      </n-table>
      <template #footer>
        <n-flex justify="end">
          <n-button @click="() => (showModal = false)">Cerrar</n-button>
          <n-button
            v-if="hasPermission(['group-manager.send-email'])"
            type="primary"
            :loading="loading"
            @click="sendEmails"
          >
            Enviar correo de confirmación
          </n-button>
        </n-flex>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

import {
  _getStudents,
  _sendMassiveEmail,
} from "@/app/modules/Group/services/enrollment-group.services";

import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  groupId: any;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);

const students = ref<any[]>([]);

const getStudents = async () => {
  const response = await _getStudents(props.groupId);
  students.value = response;
};

const sendEmails = async () => {
  loading.value = true;
  try {
    await _sendMassiveEmail(props.groupId);
    emit("success");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const initForm = async () => {
  await getStudents();
};

watch(showModal, async (value) => {
  if (value) {
    await initForm();
  }
});
</script>

<style>
.content-table .n-card__content {
  padding: 0 !important;
}
</style>
