<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      title="Cambiar contraseña"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef" :model="form" :rules="formRules" size="large">
        <n-row>
          <n-col span="24">
            <n-form-item
              path="password"
              label="Contraseña"
              :feedback="formErrors?.password"
            >
              <n-input
                placeholder="Escribe tu contraseña"
                type="password"
                :status="formErrors?.password != undefined ? 'error' : ''"
                v-model:value="form.password"
                @input="
                  formErrors != null ? (formErrors.password = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="newPassword"
              label="Nueva contraseña"
              :feedback="formErrors?.newPassword"
            >
              <n-input
                placeholder="Escribe tu nueva contraseña"
                type="password"
                :status="formErrors?.newPassword != undefined ? 'error' : ''"
                v-model:value="form.newPassword"
                @input="
                  formErrors != null
                    ? (formErrors.newPassword = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col span="24">
            <n-form-item
              path="confirmPassword"
              label="Confirmar contraseña"
              :feedback="formErrors?.confirmPassword"
            >
              <n-input
                placeholder="Escribe tu nueva contraseña"
                type="password"
                :status="
                  formErrors?.confirmPassword != undefined ? 'error' : ''
                "
                v-model:value="form.confirmPassword"
                @input="
                  formErrors != null
                    ? (formErrors.confirmPassword = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>
        </n-row>
      </n-form>
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
            @click="handleSubmit"
            :loading="loading"
            >Guardar</n-button
          >
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import type { FormInst } from "naive-ui";
import { ref, computed, watch } from "vue";
import type {
  ChangePasswordFormDTO,
  ChangePasswordFormErrorDTO,
} from "@/app/modules/Profile/types/Profile.types";

import {
  _getFormInitValues,
  _getFormValidate,
} from "@/app/modules/Profile/components/ChangePassword/configs.ts";

import { _changePassword } from "@/app/modules/Profile/services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<ChangePasswordFormDTO>({ ..._getFormInitValues() });

const formErrors = ref<ChangePasswordFormErrorDTO | null>(null);
const formRules = computed(() => _getFormValidate(form.value));

const handleSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    let response = null;
    if (valid) {
      loading.value = true;
      response = await _changePassword(form.value);
      if (!response.status) {
        formErrors.value = response.data as ChangePasswordFormErrorDTO;
      } else {
        emit("success");
        showModal.value = false;
      }
    }
  }
  loading.value = false;
};

const init = () => {
  form.value = { ..._getFormInitValues() };
  formErrors.value = null;
};

watch(showModal, (value) => {
  if (value) {
    formErrors.value = null;
    init();
  }
});
</script>
