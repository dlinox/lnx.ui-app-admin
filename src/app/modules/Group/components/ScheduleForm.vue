<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 650px"
      title="Horarios del grupo"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
    >
      <n-checkbox
        v-for="(day, index) in DAYS"
        :key="index"
        :label="day.label"
        :default-checked="daysSelected.includes(day.value)"
        @update:checked="handleCheckedChange($event, day.value)"
      />

      <n-divider dashed title-placement="left"> Horarios </n-divider>

      <n-form ref="formRef" :model="form">
        <n-row :gutter="16" v-for="(schedule, index) in form" :key="index">
          <n-col :span="12">
            <n-form-item
              :label="DAYS?.find((item:any) => item.value === schedule.day)?.label"
              :path="`[${index}].startHour`"
              :rule="rules.startHour"
            >
              <n-time-picker
                clearable
                v-model:value="schedule.startHour"
                format="h:mm a"
                placeholder="Seleccione la hora de inicio"
                style="width: 100%"
              />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item
              label=""
              :path="`[${index}].endHour`"
              :rule="rules.endHour"
            >
              <n-time-picker
                clearable
                v-model:value="schedule.endHour"
                format="h:mm a"
                placeholder="Seleccione la hora de fin"
                style="width: 100%"
              />
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
  type ScheduleDTO,
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

const form = ref<ScheduleDTO[]>([]);

const rules = {
  startHour: {
    type: "number",
    required: true,
    message: "Obligatorio",
    trigger: "blur",
  },
  endHour: {
    type: "number",
    required: true,
    message: "Obligatorio",
    trigger: "blur",
  },
};
const daysSelected = ref<string[]>([]);

const addDay = (day: string) => {
  form.value.push({ day, startHour: null, endHour: null });
};

const removeDay = (day: string) => {
  form.value = form.value.filter((item) => item.day !== day);
};

const orderForm = () => {
  form.value = form.value.sort((a, b) => {
    return (
      DAYS.findIndex((item) => item.value === a.day) -
      DAYS.findIndex((item) => item.value === b.day)
    );
  });
};

const handleCheckedChange = (value: boolean, day: string) => {
  if (value) {
    addDay(day);
  } else {
    removeDay(day);
  }
  orderForm();
};

const submitForm = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      emit("submit", form.value, props.groupSelect!.id);
      showModal.value = false;
    }
  });
};

const initForm = () => {
  daysSelected.value = [];
  form.value = [];
  daysSelected.value = props.groupSelect!.schedules.map((item) => item.day);
  form.value = Object.assign([], props.groupSelect!.schedules);
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
