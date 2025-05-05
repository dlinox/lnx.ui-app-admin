<template>
  <n-card
    :segmented="{
      content: true,
      footer: true,
    }"
    title="Matrícula"
    size="small"
  >
    <n-statistic label="Periodo / Matrículados">
      <small>
        {{ data?.period ? data?.period : "-" }} /
        <span class="text-blue-500 font-bold">
          {{ data?.enrollments }}
        </span>
      </small>
    </n-statistic>
  </n-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { _getEnrollmentsPeriod } from "@/app/modules/dashboard/services/dashboard.services";

const data = ref<any>(null);
const initWidget = async () => {
  data.value = await _getEnrollmentsPeriod();
};

initWidget();
</script>
