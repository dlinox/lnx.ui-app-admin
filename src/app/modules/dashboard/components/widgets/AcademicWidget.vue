<template>
  <n-card
    :segmented="{
      content: true,
      footer: true,
    }"
    title="Carga Académica"
    size="small"
  >
    <n-row>
      <n-col span="6">
        <n-statistic label="Curricula(s)">
          {{ data?.curriculums }}
        </n-statistic>
      </n-col>
      <n-col span="6">
        <n-statistic label="Modulos">
          {{ data?.modules }}
        </n-statistic>
      </n-col>
      <n-col span="6">
        <n-statistic label="Áreas">
          {{ data?.areas }}
        </n-statistic>
      </n-col>
      <n-col span="6">
        <n-statistic label="Cursos">
          {{ data?.courses }}
        </n-statistic>
      </n-col>
    </n-row>
  </n-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { _getAcademicDashboard } from "@/app/modules/dashboard/services/dashboard.services";

const data = ref<any>(null);
const initWidget = async () => {
  data.value = await _getAcademicDashboard();
};

initWidget();
</script>
