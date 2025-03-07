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
              {{ validatePayments()  }}
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
} from "@/app/modules/Enrollment/services/enrollment.services";
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

const formRef = ref<FormInst | null>(null);
const formRules = computed(() => _getFormRules());

const form = ref<EnrollmentModuleFormDTO>(_getFormInitValues());

const payments = ref<PaymentDTO[]>([]);
const amount = ref<number>(0);

const onSuccessPaymentValidation = (value: any) => {
  console.log("Pago validado", value);
  form.value.payments.push(value.token);
  payments.value.push({
    token: value.token,
    amount: value.payment.amount,
    sequenceNumber: value.payment.sequenceNumber,
  });
};

const removePayment = (index: number) => {
  let item = payments.value[index];
  let token = item.token;
  payments.value.splice(index, 1);
  let payment = form.value.payments.find((item: any) => item.token == token);
  if (!payment) return;
  let indexPayment = form.value.payments.indexOf(payment);
  form.value.payments.splice(indexPayment, 1);
};

const onSelectedModule = (value: any) => {
  console.log("Seleccionando modulo", value);

  form.value.payments = [];
  moduleItems.value.forEach((item: any) => {
    if (item.value == value) {
      amount.value = item.price;
    }
  });
};

const getModulesEnrollmentItems = async () => {
  const response = await _getModulesEnrollment(
    props.studentId,
    props.curriculumId
  );
  moduleItems.value = response.data;
};

const validatePayments = () => {

  let total = payments.value.reduce(
    (acc, item: any) => acc + parseInt(item.amount),
    0
  );
  return total >= amount.value ? null : "El monto pagado es menor al total";
};

const handleSubmit = async () => {
  form.value.studentId = props.studentId;
  form.value.curriculumId = props.curriculumId;
  loading.value = true;
  const response = await _enrollmentModuleStore(form.value);
  if (response.status) {
    emit("success");
    showModal.value = false;
  }
  loading.value = false;

  console.log("Guardando matricula", form.value);
};

const init = () => {
  getModulesEnrollmentItems();
  console.log("Inicializando formulario");
};

watch(showModal, (value) => {
  if (value) {
    form.value = Object.assign({}, { ..._getFormInitValues() });
    payments.value = [];
    init();
  }
});
</script>
