<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500">
        Gestionar tu cuenta de usuario
      </span>
      <h5 class="text-lg font-bold text-slate-800">Perfil de usuario</h5>
    </template>
  </n-card>
  <div class="mx-auto mt-4 max-w-2xl px-4">
    <n-card>
      <n-list>
        <n-list-item>
          <div class="text-small text-slate-500">Nombre</div>
          <div class="text-base font-bold text-slate-800">
            {{ user.name }}
          </div>
        </n-list-item>
        <n-list-item>
          <div class="text-small text-slate-500">Correo electrónico</div>
          <div class="text-base font-bold text-slate-800">
            {{ user.email }}
          </div>
        </n-list-item>
        <n-list-item>
          <div class="text-small text-slate-500">Rol</div>
          <div class="text-base font-bold text-slate-800">
            {{ user.role }}
          </div>
        </n-list-item>
        <n-list-item>
          <div class="text-small text-slate-500">Contraseña</div>
          <div class="text-base font-bold text-slate-800">************</div>
          <template #suffix>
            <n-button @click="showModal = true" type="primary">
              Cambiar contraseña
            </n-button>
          </template>
        </n-list-item>
      </n-list>
    </n-card>
    <ChangePasswordForm v-model="showModal" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "@/app/store/auth.stores";
import ChangePasswordForm from "@/app/modules/Profile/components/ChangePassword/Form.vue";

const authStore = useAuthStore();

const showModal = ref<boolean>(false);
const user = computed(() => authStore.authState.user);
</script>
