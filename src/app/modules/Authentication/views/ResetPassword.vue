<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
    <div class="w-96 bg-white rounded border border-gray-200 px-4 py-6">
      <div>
        <h2 class="text-2xl font-bold text-slate-800 mb-2">
          Resetear contraseña
        </h2>
        <p class="text-slate-500 mb-4">
          Ingresa tu correo electrónico y te enviaremos una nueva contraseña
        </p>
      </div>
      <n-form
        ref="formRef"
        :rules="formRules"
        :model="form"
        @keydown.enter="submitForm"
      >
        <n-form-item path="email" label="Correo electrónico">
          <n-input
            v-model:value="form.email"
            placeholder="Correo electrónico"
            name="email"
            id="email"
          />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" block :loading="loading" @click="submitForm">
            Enviar
          </n-button>
        </n-form-item>
        <p class="text-sm text-end">
          Ya tengo cuenta,
          <router-link
            to="/login"
            class="text-slate-500 hover:text-blue-400 hover:underline"
          >
            iniciar sesión.
          </router-link>
        </p>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { _resetPassword } from "../services/auth.services";
import { _getValidationFormResetPassword } from "../config/index.config";
import { type ResetPasswordFormDTO } from "../types/Auth.types";

const router = useRouter();
const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);

const formRules = { ..._getValidationFormResetPassword() };
const form = ref<ResetPasswordFormDTO>({
  email: "",
});

const submitForm = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    if (valid) {
      loading.value = true;
      const response = await _resetPassword(form.value);
      if (response) {
        router.push({
          name: "Login",
        });
      }
      loading.value = false;
    }
  }
};

const initView = () => {
  // _clearSession();
};

initView();
</script>
