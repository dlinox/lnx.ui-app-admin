<template>
  <n-card
    :segmented="{
      content: true,
      footer: true,
    }"
    title="Docentes"
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
import { _getAllTeachers } from "@/app/modules/dashboard/services/dashboard.services";

const data = ref<any>(null);
const initWidget = async () => {
  data.value = await _getAllTeachers();
};

initWidget();
</script>
