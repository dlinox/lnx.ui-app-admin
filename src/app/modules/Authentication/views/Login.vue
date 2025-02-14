<template>
  <div class="login-container">
    <n-card class="login-card" title="Iniciar sesión">
      <p class="subtitle">Ingrese sus datos para iniciar sesión</p>

      <n-form ref="formRef" :model="form" :rules="rules">
        <n-form-item path="username" label="Usuario">
          <n-input v-model:value="form.username" placeholder="Usuario" />
        </n-form-item>

        <n-form-item path="password" label="Contraseña">
          <n-input
            autocomplete="current-password"
            v-model:value="form.password"
            type="password"
            placeholder="Contraseña"
          />
        </n-form-item>

        <n-form-item>
          <n-button type="primary" block @click="submitForm">
            Iniciar sesión
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>

    <p class="version">v0.1</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";

import { type AuthRequestDTO } from "../types/Auth.types";
import { signIn } from "../services/auth.services";

const formRef = ref(null);
const message = useMessage();

const form = ref<AuthRequestDTO>({
  username: "",
  password: "",
});

const rules = {
  username: [
    { required: true, message: "El usuario es obligatorio", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "La contraseña es obligatoria",
      trigger: "blur",
    },
  ],
};

const submitForm = async () => {
  if (!form.value.username || !form.value.password) {
    message.error("Por favor, complete todos los campos");
    return;
  }
  const response = await signIn(form.value);
  if (response) {
    message.success("Inicio de sesión exitoso");
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f8f9fa;
}

.login-card {
  width: 350px;
}

.subtitle {
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 20px;
}

.register-link {
  text-align: center;
  margin-top: 15px;
}

.register-link a {
  color: #6c757d;
  text-decoration: none;
  font-size: 14px;
}

.version {
  margin-top: 20px;
  font-size: 12px;
  color: #6c757d;
}
</style>
