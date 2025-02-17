<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      title="MATRICULA EN GRUPO"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-row :gutter="[16, 16]">
        <n-col span="24">
          <n-select
            v-model:value="form.groupId"
            placeholder="Seleccionar un grupo"
            :options="groupItems"
            :virtual-scroll="false"
            clearable
            filterable
          />
        </n-col>
        <n-col span="24" v-if="form.payment.length == 0">
          <n-card title="Información de pago" size="small">
            <n-row :gutter="[16, 16]">
              <n-col span="12">
                <n-input
                  v-model:value="paymentRequest.amount"
                  placeholder="Monto"
                  type="number"
                />
              </n-col>
              <n-col span="12">
                <n-date-picker
                  v-model:value="paymentRequest.date"
                  placeholder="Fecha de pago"
                />
              </n-col>
              <n-col span="12">
                <n-input
                  v-model:value="paymentRequest.sequenceNumber"
                  placeholder="Secuencia"
                  type="number"
                />
              </n-col>
              <n-col span="12">
                <n-select
                  :virtual-scroll="false"
                  v-model:value="paymentRequest.paymentTypeId"
                  placeholder="Metodo de pago"
                  :options="[
                    { label: 'BN - VENTANILLA', value: 7 },
                    { label: 'BN - PAGALO.PE', value: 9 },
                  ]"
                  clearable
                />
              </n-col>
              <n-col span="24">
                <n-button
                  :loading="loadingPaymentValidation"
                  secondary
                  type="primary"
                  @click="handleValidatePayment"
                  block
                  :render-icon="renderIcon('money-tick')"
                >
                  Validar Pago
                </n-button>
              </n-col>
            </n-row>
          </n-card>
        </n-col>
        <n-col span="24">
          <n-statistic
            style="background-color: #15ffaa66; padding: 0.5rem"
            v-for="item in form.payment"
            :key="item.sequenceNumber"
            :label="`${item.sequenceNumber} | ${
              new Date(item.date).toISOString().split('T')[0]
            }`"
            :value="`S/. ${item.amount}`"
          ></n-statistic>
        </n-col>
        <n-col span="24">
          <n-button
            size="large"
            type="primary"
            @click="handleSubmit"
            block
            :loading="loading"
            :render-icon="renderIcon('check')"
          >
            Guardar
          </n-button>
        </n-col>
      </n-row>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  _enrollmentGroupStore,
  _validatePaymentEnrollment,
  _getEnabledGroupEnrollment,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { renderIcon } from "@/core/utils/icon.utils";
const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  studentId: any;
  curriculumId: any;
  curriculumCourseId: any;
}>();

const loadingPaymentValidation = ref<boolean>(false);
const loading = ref<boolean>(false);

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const groupItems = ref<any>([]);

const paymentRequest = ref<any>({
  studentId: null,
  amount: null,
  date: null,
  sequenceNumber: null,
  paymentTypeId: null,
});

const form = ref<any>({
  studentId: null,
  curriculumId: null,
  groupId: null,
  payment: [],
});

const handleValidatePayment = async () => {
  paymentRequest.value.studentId = props.studentId;
  loadingPaymentValidation.value = true;
  const response = await _validatePaymentEnrollment(paymentRequest.value);
  if (response.status) {
    let payment = {
      ...paymentRequest.value,
      token: response.data,
    };
    form.value.payment.push(payment);

    paymentRequest.value = {
      studentId: props.studentId,
      amount: null,
      date: null,
      sequenceNumber: null,
      paymentTypeId: null,
    };
  }
  loadingPaymentValidation.value = false;
};

const getModulesEnrollmentItems = async () => {
  const response = await _getEnabledGroupEnrollment({
    studentId: props.studentId,
    curriculumId: props.curriculumId,
    curriculumCourseId: props.curriculumCourseId,
  });

  groupItems.value = response.data;
};

const handleSubmit = async () => {
  form.value.studentId = props.studentId;
  form.value.curriculumId = props.curriculumId;
  loading.value = true;
  const response = await _enrollmentGroupStore(form.value);
  if (response.status) {
    emit("success");
    showModal.value = false;
  }
  loading.value = false;

  console.log("Guardando matricula", form.value);
};

const init = async () => {
  await getModulesEnrollmentItems();
  console.log("Inicializando formulario");
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
