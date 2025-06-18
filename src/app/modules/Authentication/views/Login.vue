<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
    <div class="w-96 bg-white rounded border border-gray-200 px-4 py-6">
      <div>
        <div>
          <img
            src="/resources/images/Logo_UNAP.png"
            alt="Logo UNAP"
            class="w-24 h-24 mx-auto mb-4"
          />
        </div>
        <h2 class="text-2xl font-bold text-slate-800 mb-2">Iniciar sesión</h2>
        <p class="text-slate-500 mb-4">
          Inicia sesión con usuario y contraseña
        </p>
      </div>
      <n-form
        ref="formRef"
        :model="form"
        :rules="rules"
        @keydown.enter="submitForm"
      >
        <n-form-item path="username" label="Usuario">
          <n-input
            v-model:value="form.username"
            placeholder="Usuario"
            name="username"
            id="username"
          />
        </n-form-item>

        <n-form-item path="password" label="Contraseña">
          <n-input
            autocomplete="current-password"
            v-model:value="form.password"
            type="password"
            placeholder="Contraseña"
          />
        </n-form-item>

        <router-link
          to="/reset-password"
          class="text-slate-500 hover:text-blue-400 hover:underline text-sm text-end block"
        >
          ¿Olvidaste tu contraseña?
        </router-link>

        <n-form-item>
          <n-button type="primary" block :loading="loading" @click="submitForm">
            Iniciar sesión
          </n-button>
        </n-form-item>
      </n-form>
      <div class="text-center w-full text-slate-500 text-xs">
        © {{ new Date().getFullYear() }} Instituto de Informática - UNAP. v1.1
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";

import { type AuthFormDTO } from "../types/Auth.types";
import { _signIn } from "../services/auth.services";
import { _getValidationForm, _initStateForm } from "../config/index.config";

const formRef = ref<HTMLFormElement | null>(null);
const message = useMessage();
const loading = ref<boolean>(false);

const form = ref<AuthFormDTO>({ ..._initStateForm() });

const rules = { ..._getValidationForm() };

const submitForm = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    if (valid) {
      loading.value = true;
      const response = await _signIn(form.value);
      loading.value = false;
      if (response) message.success("Inicio de sesión exitoso");
    }
  }
};

const initView = () => {
  // _clearSession();
};

initView();
</script>
