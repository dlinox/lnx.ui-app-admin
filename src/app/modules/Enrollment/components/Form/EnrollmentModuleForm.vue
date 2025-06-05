<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="MATRICULA EN MODULO"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef" :model="form" :rules="formRules" size="large">
        <n-row :gutter="[16, 16]">
          <n-col span="24">
            <n-form-item path="moduleId" label="Modulo">
              <n-select
                v-model:value="form.moduleId"
                placeholder="Seleccionar modulo"
                :options="moduleItems"
                :virtual-scroll="false"
                clearable
                filterable
                @update:value="onSelectedModule"
              />
            </n-form-item>
          </n-col>

          <n-col span="24">
            <n-form-item path="courseId" label="Curso">
              <n-select
                v-model:value="form.courseId"
                placeholder="Seeleccione un curso"
                :options="courseItems"
                :virtual-scroll="false"
                clearable
                filterable
                @update:value="onSelectedCourse"
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <div class="wrapper-list-groups">
              <n-list hoverable clickable>
                <template #header>
                  Grupos aperturados ({{
                    groupItems?.length ? groupItems.length : 0
                  }})
                </template>
                <n-list-item
                  v-for="item in groupItems"
                  :key="item.id"
                  :class="{ 'item-selected': form.groupId == item.id }"
                  :extra="item.price"
                >
                  <n-thing @click="onSelectedGroup(item)">
                    <template #header>
                      <n-tag :bordered="false" type="info" size="small">
                        {{ item.modality }}
                      </n-tag>
                      {{ `${item.group} - S/. ${item.price}` }}
                    </template>

                    <template v-if="form.groupId == item.id" #header-extra>
                      <n-button
                        circle
                        type="warning"
                        :render-icon="renderIcon('verify')"
                      ></n-button>
                    </template>

                    Min.: <b> {{ item.minStudents }} </b> | Matriculados:
                    <b> {{ item.enrolledStudents }} </b> | Reservados:
                    <b> {{ item.reservedStudents }} </b>
                    <br />
                    <n-tag :bordered="false" type="info" size="small">
                      <strong>
                        {{ item.schedules.days }} -
                        {{ item.schedules.startHour }} a
                        {{ item.schedules.endHour }}
                      </strong>
                    </n-tag>
                  </n-thing>
                </n-list-item>
              </n-list>
            </div>
          </n-col>

          <n-col span="24">
            <span
              role="button"
              @click="showPaymentModal = true"
              class="border border-dashed border-gray-300 p-4 rounded-sm flex items-center justify-center cursor-pointer text-gray-400 hover:bg-gray-50 font-bold hover:text-gray-500 mb-4"
            >
              <LnxIcon class="me-3" icon-name="money-add" size="20" />
              Agregar pago
            </span>

            <table class="table-auto w-full">
              <tbody>
                <tr
                  v-for="(item, index) in payments"
                  :key="index"
                  class="border-b border-gray-300 border-dashed px-4 py-2"
                >
                  <td class="px-4 py-2 flex items-center">
                    <n-button
                      type="error"
                      size="small"
                      secondary
                      @click="removePayment(index)"
                      :render-icon="renderIcon('trash')"
                    ></n-button>

                    <i class="ms-2">
                      {{ item.sequenceNumber }}
                    </i>
                  </td>
                  <td class="text-end px-4 py-2">S/. {{ item.amount }}</td>
                </tr>
                <tr class="border-b-2 border-gray-500">
                  <td class="px-4 py-2">Total pagado</td>
                  <td class="px-4 py-2 font-bold text-lg text-end">
                    S/.
                    {{
                      payments.reduce(
                        (acc, item: any) => acc + parseInt(item.amount),
                        0
                      )
                    }}
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2">Total a pagar</td>
                  <td class="px-4 py-2 font-bold text-lg text-end">
                    S/. {{ amount }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-red-500 text-sm text-end text-sm">
              {{
                isPaymentComplete
                  ? ""
                  : "El monto pagado no cubre el total requerido."
              }}
            </div>
          </n-col>

          <n-col span="24">
            <n-button
              size="large"
              type="primary"
              @click="handleSubmit"
              block
              :loading="loading"
            >
              Realizar matricula
            </n-button>
          </n-col>
        </n-row>
      </n-form>
    </n-card>
  </n-modal>
  <PaymentForm
    v-model="showPaymentModal"
    :studentId="props.studentId"
    @success="onSuccessPaymentValidation"
  />
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  _getModulesEnrollment,
  _enrollmentModuleStore,
  _getEnabledGroupEnrollment,
} from "@/app/modules/Enrollment/services/enrollment.services";

import { __getItemsByModuleForSelect } from "@/app/modules/Course/services/course.services";

import { renderIcon } from "@/core/utils/icon.utils";
import PaymentForm from "@/app/modules/Payment/components/PaymentForm.vue";
import type { PaymentDTO } from "@/app/modules/Payment/types/Payment.types";
import type { EnrollmentModuleFormDTO } from "../../types/Enrollment.types";
import {
  _getFormInitValues,
  _getFormRules,
} from "../../configs/formModule.config";
import type { FormInst } from "naive-ui";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  studentId: any;
  curriculumId: any;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const showPaymentModal = ref<boolean>(false);
const moduleItems = ref<any>([]);
const courseItems = ref<any>([]);
const groupItems = ref<any>([]);
const formRef = ref<FormInst | null>(null);
const formRules = computed(() => _getFormRules());

const form = ref<EnrollmentModuleFormDTO>(_getFormInitValues());

const payments = ref<PaymentDTO[]>([]);

const modulePrice = ref<number>(0);
const coursePrice = ref<number>(0);
const amount = ref<number>(0);

const onSuccessPaymentValidation = (value: any) => {
  form.value.payments.push(value.token);
  payments.value.push({
    token: value.token,
    amount: value.payment.amount,
    sequenceNumber: value.payment.sequenceNumber,
  });
};

const removePayment = (index: number) => {
  const item = payments.value.splice(index, 1)[0];
  const token = item?.token;
  if (!token) return;

  const indexPayment = form.value.payments.indexOf(token);
  if (indexPayment !== -1) {
    form.value.payments.splice(indexPayment, 1);
  }
};

const onSelectedModule = async (value: any) => {
  form.value.payments = [];
  form.value.courseId = null;
  form.value.groupId = null;
  courseItems.value = [];
  groupItems.value = [];

  courseItems.value = await __getItemsByModuleForSelect(value);

  moduleItems.value.forEach((item: any) => {
    if (item.value == value) {
      modulePrice.value = parseFloat(item.price);
      // amount.value = modulePrice.value;
    }
  });
};

const onSelectedCourse = async (value: any) => {
  form.value.courseId = value;
  await getEnabledGroupEnrollment(value);
};

const onSelectedGroup = (item: any) => {
  console.log("Grupo seleccionado", item);
  coursePrice.value = parseFloat(item.price);
  if (form.value.groupId && form.value.groupId != item.id) {
    form.value.groupId = item.id;
    amount.value = coursePrice.value;
  } 
  else if (form.value.groupId == item.id) {
    form.value.groupId = null;
    amount.value = 0.0;
  } 
  else {
    form.value.groupId = item.id;
    amount.value =  coursePrice.value;
  }
};

const getEnabledGroupEnrollment = async (courseId: number) => {
  const response = await _getEnabledGroupEnrollment({
    studentId: props.studentId,
    curriculumId: props.curriculumId,
    courseId: courseId,
  });

  groupItems.value = response.data;
};
const getModulesEnrollmentItems = async () => {
  const response = await _getModulesEnrollment(
    props.studentId,
    props.curriculumId
  );
  moduleItems.value = response.data;
};

const isPaymentComplete = computed(
  () =>
    payments.value.reduce((acc, item: any) => acc + Number(item.amount), 0) >=
    amount.value
);

const handleSubmit = async () => {
  form.value.studentId = props.studentId;
  form.value.curriculumId = props.curriculumId;

  if (formRef.value) {
    const valid = await formRef.value.validate();
    if (!valid) return;
    loading.value = true;
    const response = await _enrollmentModuleStore(form.value);
    if (response.status) {
      emit("success");
      showModal.value = false;
    }
    loading.value = false;
  }
};

const init = () => {
  getModulesEnrollmentItems();
  console.log("Inicializando formulario");
};

watch(showModal, (value) => {
  if (value) {
    form.value = Object.assign({}, { ..._getFormInitValues() });
    payments.value = [];
    moduleItems.value = [];
    courseItems.value = [];
    groupItems.value = [];
    modulePrice.value = 0;
    coursePrice.value = 0;
    amount.value = 0;
    init();
  }
});
</script>
