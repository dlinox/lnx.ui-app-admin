<template>
  <template
    v-if="hasPermission(['period.create', 'period.edit', 'period.delete'])"
  >
    <n-card
      :segmented="{
        header: true,
        content: true,
        footer: true,
      }"
    >
      <template #header>
        <h6 style="font-size: 14px; color: #999; margin: 0">
          Gestión Periodos Académicos
        </h6>
        Periodos Académicos
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['period.create'])"
          size="large"
          type="primary"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
          Agregar
        </n-button>
      </template>
    </n-card>
    <DataTable>
      <template #extra="{ reLoadDataTable }">
        <PeriodForm
          v-model="showModal"
          :item="null"
          @success="reLoadDataTable"
        />
      </template>
    </DataTable>
  </template>
  <template v-else>
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
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Period/configs/dataTable.configs";
import PeriodForm from "@/app/modules/Period/components/PeriodForm.vue";
import DataTable from "@/app/modules/Period/components/DataTable/DataTable.vue";
import { __searchPeriods } from "@/app/shared/services/selectables.services";
import { useRouter } from "vue-router";
import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const router = useRouter();
const showModal = ref<boolean>(false);
</script>
