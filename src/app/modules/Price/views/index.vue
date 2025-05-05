<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Costos </span>
      <h5 class="text-lg font-bold text-slate-800">Gestión de precios</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>

    <template #action>
      <n-row gutter="16" style="display: flex; justify-content: center">
        <n-col span="10">
          <n-select
            v-model:value="formSearch.curriculumId"
            placeholder="Seleccionar Plan de estudio"
            filterable
            :options="optionscurriculumId"
            clearable
            :virtual-scroll="false"
          />
        </n-col>
      </n-row>
    </template>
  </n-card>
  <DataTable
    v-if="formSearch!.curriculumId"
    :curriculumId="formSearch.curriculumId"
  >
    <template
      #extra="{ reLoadDataTable, studentTypesItems, modulesByCurriculumItems }"
    >
      <PriceForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
        :studentTypesItems="studentTypesItems"
        :modulesByCurriculumItems="modulesByCurriculumItems"
        :curriculumId="formSearch.curriculumId"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { SelectOption } from "naive-ui";
import { renderIcon } from "@/core/utils/icon.utils";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import DataTable from "@/app/modules/Price/components/DataTable/DataTable.vue";
import PriceForm from "@/app/modules/Price/components/PriceForm.vue";
const optionscurriculumId = ref<SelectOption[]>([]);

const showModal = ref<boolean>(false);

const formSearch = ref<{
  curriculumId: number | null;
}>({
  curriculumId: null,
});

const initView = async () => {
  optionscurriculumId.value = await __searchCurriculums("");
};

initView();
</script>
