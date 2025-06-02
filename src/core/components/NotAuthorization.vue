<template>
  <n-result
    status="403"
    title="403 No Autorizado"
    description="Algunas puertas siempre están cerradas para ti."
  >
    <template #footer>
      <n-button @click="router.push('/')"> Ir a casa </n-button>
    </template>
  </n-result>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
