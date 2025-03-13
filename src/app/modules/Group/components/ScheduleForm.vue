<template>
  <n-modal v-model:show="showModal">
    <n-card style="width: 650px" title="Horarios del grupo" :bordered="false" size="small" role="dialog"
      aria-modal="true" :segmented="{
        content: true,
        footer: true,
      }">

      <n-divider dashed title-placement="left"> Horarios </n-divider>

      <n-form ref="formRef" :model="form">

        <n-row :gutter="16">
          <n-col :span="24">
            <n-form-item label="Días">
              <n-checkbox-group v-model:value="form.days">
                <n-checkbox v-for="(day, index) in DAYS" :key="index" :label="day.label" :value="day.value" />
              </n-checkbox-group>
            </n-form-item>
          </n-col>

          <n-col :span="12">
            <n-form-item label="Hora de inicio">
              <n-input clearable type="time" v-model:value="form.startHour" placeholder="" style="width: 100%" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hora de fin">
              <n-input clearable type="time" v-model:value="form.endHour" placeholder="" style="width: 100%" />
            </n-form-item>
          </n-col>
        </n-row>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showModal = false">Cancelar</n-button>
          <n-button type="primary" @click="submitForm"> Aceptar </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { FormInst } from "naive-ui";

import {
  type GroupFormDTO,
  type ScheduleFormDTO,
} from "@/app/modules/Group/types/Group.types";
import { DAYS } from "@/core/constants/days.constants";
const emit = defineEmits(["update:modelValue", "submit", "cancel"]);
const props = defineProps<{
  modelValue: boolean;
  groupSelect: GroupFormDTO | null;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const formRef = ref<FormInst | null>(null);

const formDefault = {
  days: [],
  startHour: null,
  endHour: null,
};

const form = ref<ScheduleFormDTO>(Object.assign({}, formDefault));

const submitForm = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      emit("submit", form.value, props.groupSelect!.id);
      showModal.value = false;
    }
  });
};

const initForm = () => {

  form.value = Object.assign(formDefault, props.groupSelect!.schedule);
};

watch(
  () => props.modelValue,
  (value) => {
    if (value && props.groupSelect) {
      console.log("initForm");
      initForm();
    }
  }
);
</script>
