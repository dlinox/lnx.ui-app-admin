<template>
  <n-card
    :segmented="{
      content: true,
      footer: true,
    }"
    title="Estudiante matrículados"
    size="small"
  >
    <template #header-extra>
      <n-select
        style="width: 100px"
        aria-placeholder="Seleccione un año"
        placeholder="Año"
        :options="yearOptions"
        size="small"
        v-model:value="year"
        @update:value="getData"
        :virtual-scroll="false"
      />
    </template>
    <LineChart v-bind="lineChartProps" />
  </n-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, type ChartData, registerables } from "chart.js";
import {
  _getAllYearsForSelect,
  _getEnrollmentsByYear,
} from "@/app/modules/dashboard/services/dashboard.services";

Chart.register(...registerables);

const yearOptions = ref([]);
const defaultData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const data = ref<number[]>(defaultData);
const currentYear = new Date().getFullYear();

const year = ref<number>(currentYear);

const lineChartData = computed<ChartData<"line">>(() => ({
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Estudiantes",
      data: data.value,
      backgroundColor: "#77CEFF",
      borderColor: "#0079AF",
      fill: false,
    },
  ],
}));

const getData = async () => {
  data.value = await _getEnrollmentsByYear(year.value);
  //   lineChartData.value.datasets[0].data = data.value;
};

const { lineChartProps } = useLineChart({
  chartData: lineChartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Estudiantes matrículados",
      },
    },
  },
});

const initWidget = async () => {
  yearOptions.value = await _getAllYearsForSelect();
  await getData();
};

initWidget();
</script>
