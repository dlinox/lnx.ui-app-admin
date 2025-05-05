<template>
  <n-card
    :segmented="{
      content: true,
      footer: true,
    }"
    title="Estudiantes"
    size="small"
  >
    <n-statistic label="Registrados">
      <small>
        {{ data }}
      </small>
    </n-statistic>
  </n-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { _getAllStudents } from "@/app/modules/dashboard/services/dashboard.services";

const data = ref<any>(null);
const initWidget = async () => {
  data.value = await _getAllStudents();
};

initWidget();
</script>
