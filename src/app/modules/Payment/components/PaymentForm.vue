<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      title="REGISTRAR PAGO"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-alert title="¡Importante!" type="default" class="mb-4">
        <template #icon>
          <n-icon>
            <LnxIcon icon-name="information" size="20" />
          </n-icon>
        </template>
        Solo se validan pagos realizados, con un día de anticipación.
      </n-alert>
      <n-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        size="large"
        @keydown.enter="handleValidatePayment"
      >
        <n-row :gutter="[16, 16]">
          <n-col span="12">
            <n-form-item path="amount" label="Monto">
              <n-input v-model:value="form.amount" />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item path="date" label="Fecha de pago">
              <n-input placeholder="" type="date" v-model:value="form.date" />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item path="sequenceNumber" label="Secuencia">
              <n-input v-model:value="form.sequenceNumber" />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item path="paymentTypeId" label="Metodo de pago">
              <n-select
                :virtual-scroll="false"
                v-model:value="form.paymentTypeId"
                placeholder="Metodo de pago"
                :options="[
                  { label: 'BN - VENTANILLA', value: 7 },
                  { label: 'BN - PAGALO.PE', value: 9 },
                ]"
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item path="paymentFile" label="Archivo de pago">
              <input
                class="border w-full p-2 rounded"
                ref="fileInput"
                @change="onUploadFile"
                :show-button="false"
                :accept="'image/*,application/pdf'"
                type="file"
                placeholder=""
              />
            </n-form-item>
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
      </n-form>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { renderIcon } from "@/core/utils/icon.utils";

import { ref, computed, watch } from "vue";
import { _validatePayment } from "../services/payment.services";
import { _getFormInitValues, _getFormRules } from "../config/form.config";
import { type PaymentFormDTO } from "../types/Payment.types";
import type { FormInst } from "naive-ui";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  studentId: any;
}>();

const loadingPaymentValidation = ref<boolean>(false);

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
const formRef = ref<FormInst | null>(null);
const form = ref<PaymentFormDTO>({} as PaymentFormDTO);
const formRules = computed(() => _getFormRules(form.value.paymentTypeId));
const fileInput = ref<null>(null);

const onUploadFile = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (!target.files || target.files.length === 0) {
    form.value.paymentFile = null;
    return;
  }

  const file = target.files[0];

  if (
    ![
      "image/jpeg",
      "image/gif",
      "image/jpg",
      "image/png",
      "image/webp",
      "application/pdf",
    ].includes(file.type)
  ) {
    alert("El archivo debe ser una imagen válida (JPEG, PNG, WEBP o PDF).");
    form.value.paymentFile = null;
    target.value = ""; // Resetea el input
    return;
  }

  // Validar tamaño (5 MB = 5 * 1024 * 1024 bytes)
  if (file.size > 5 * 1024 * 1024) {
    alert("El archivo no debe superar los 5 MB.");
    form.value.paymentFile = null;
    target.value = ""; // Resetea el input
    return;
  }

  // Si pasa las validaciones
  form.value.paymentFile = file;
};

const handleValidatePayment = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();

    if (!valid) return;
  }

  form.value.studentId = props.studentId;
  loadingPaymentValidation.value = true;
  const response = await _validatePayment(form.value);

  if (response.token !== null) {
    showModal.value = false;
    emit("success", {
      token: response.token,
      payment: form.value,
    });
  }
  loadingPaymentValidation.value = false;
};

const initForm = () => {
  console.log("Inicializando formulario");
  form.value = Object.assign({}, _getFormInitValues());
};

watch(showModal, (value) => {
  if (value) {
    initForm();
  }
});
</script>
