<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500">Gestión de convalidaciones </span>
      <h5 class="text-lg font-bold text-slate-800">Convalidaciones</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>

  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <FormRecognition
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import FormRecognition from "@/app/modules/Recognition/components/Form/Form.vue";
import DataTable from "@/app/modules/Recognition/components/DataTable/DataTable.vue";
const showModal = ref<boolean>(false);

const initView = async () => {};

initView();
</script>
