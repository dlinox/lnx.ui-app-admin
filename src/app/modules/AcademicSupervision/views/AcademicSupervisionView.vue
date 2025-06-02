<template>
  <template
    v-if="
      hasPermission([
        'academic-supervision.create',
        'academic-supervision.edit',
        'academic-supervision.delete',
      ])
    "
  >
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500">
          Registro de supervisión académica
        </span>
        <h5 class="text-lg font-bold text-slate-800">Supervisión académica</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['academic-supervision.create'])"
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
        <AcademicSupervisionForm
          v-model="showModal"
          :item="null"
          @success="reLoadDataTable"
        />
      </template>
    </DataTable>
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/AcademicSupervision/components/DataTable/configs";
import AcademicSupervisionForm from "@/app/modules/AcademicSupervision/components/Form/Form.vue";
import DataTable from "@/app/modules/AcademicSupervision/components/DataTable/DataTable.vue";
import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const showModal = ref<boolean>(false);
</script>
