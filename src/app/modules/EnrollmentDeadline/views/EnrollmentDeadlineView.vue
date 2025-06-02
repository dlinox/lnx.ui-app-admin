<template>
  <template
    v-if="
      hasPermission([
        'enrollment-deadline.create',
        'enrollment-deadline.extension',
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
        <span class="text-sm text-slate-500"
          >Gestión de Periodos de Matrícula</span
        >
        <h5 class="text-lg font-bold text-slate-800">Periodos de Matrícula</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['enrollment-deadline.create'])"
          type="primary"
          size="large"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
          Agregar
        </n-button>
      </template>
    </n-card>
    <DataTable>
      <template #extra="{ reLoadDataTable }">
        <EnrollmentDeadlineForm
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
import { _createColumns } from "@/app/modules/EnrollmentDeadline/components/DataTable/configs";
import EnrollmentDeadlineForm from "@/app/modules/EnrollmentDeadline/components/Form/Form.vue";
import DataTable from "@/app/modules/EnrollmentDeadline/components/DataTable/DataTable.vue";
import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();
const showModal = ref<boolean>(false);
</script>
