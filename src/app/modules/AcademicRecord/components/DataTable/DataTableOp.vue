<template>
  <template v-if="records.length > 1">
    <n-button @click="showModal = true"> Registros
      <template #icon>
        <LnxIcon icon-name="task" size="20" />
      </template>
    </n-button>
  </template>
  <template v-else>
    <n-button @click="getRecordPdf(records[0].id, null)" :loading="loading">
      Descargar
      <template #icon>
        <LnxIcon icon-name="document-download" size="20" />
      </template>
    </n-button>
  </template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
    >
      <n-table :bordered="false" :single-line="false" size="small">
        <thead>
          <tr>
            <th width="160px">Fecha del registro</th>
            <th>Observaciones</th>
            <th width="120px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in records" :key="index">
            <td>
              {{ item.createdAt }}
            </td>
            <td>
              {{ item.observations }}
            </td>
            <td>
              <n-button
                @click="getRecordPdf(item.id, index)"
                :loading="item.loading"
              >
                Descargar
                <template #icon>
                  <LnxIcon icon-name="document-download" size="20" />
                </template>
              </n-button>
            </td>
          </tr>
        </tbody>
      </n-table>

      <template #footer>
        <n-space justify="end">
          <n-button class="" @click="showModal = false"> Cerrar </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import LnxIcon from "@/core/components/LnxIcon.vue";

import { _getRecordPdf } from "@/app/modules/AcademicRecord/services/academicRecord.services";
import { ref } from "vue";

const emit = defineEmits(["edit", "delete"]);

const props = defineProps<{
  item: any;
}>();

const records = ref<any[]>(props.item.records);

const showModal = ref<boolean>(false);

const loading = ref<boolean>(false);

const getRecordPdf = async (id: number, index: number | null) => {
  if (index === null) {
    loading.value = true;
    await _getRecordPdf(id);
    loading.value = false;
    return;
  }
  records.value[index].loading = true;
  await _getRecordPdf(id);
  records.value[index].loading = false;
};
</script>
