<template>
  <template v-if="records.length > 1">
    <n-button @click="showModal = true">
      Registros
      <template #icon>
        <LnxIcon icon-name="task" size="20" />
      </template>
    </n-button>
  </template>
  <template v-else>
    <n-button-group>
      <n-button @click="getRecordPdf(records[0].id, null)" :loading="loading">
        Ver
        <template #icon>
          <LnxIcon icon-name="document-download" size="20" />
        </template>
      </n-button>
      <n-button
        @click="handleModalPrint(records[0])"
        :loading="loading"
      >
        Imprimir
        <template #icon>
          <LnxIcon icon-name="printer" size="20" />
        </template>
      </n-button>
    </n-button-group>
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
            <th width="160px">Código</th>
            <th>Observaciones</th>
            <th width="120px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(element, index) in records" :key="index">
            <td>
              {{ element.createdAt }}
            </td>
            <td>
              {{ element.code }}
            </td>
            <td>
              {{ element.observations }}
            </td>
            <td>
              <n-button-group>
                <n-button
                  @click="getRecordPdf(element.id, index)"
                  :loading="element.loading"
                >
                  Ver
                  <template #icon>
                    <LnxIcon icon-name="document-download" size="20" />
                  </template>
                </n-button>
                <n-button
                  v-if="element.isEnabled"
                  @click="handleModalPrint(element)"
                  :loading="element.loading"
                >
                  Imprimir
                  <template #icon>
                    <LnxIcon icon-name="printer" size="20" />
                  </template>
                </n-button>
              </n-button-group>
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

  <n-modal v-model:show="showModalPrint">
    <n-card
      style="width: 400px"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      title="Imprimir Acta"
    >
      <n-form
        ref="formPrintRef"
        :model="formPrint"
        :rules="formPrintRules"
        size="large"
      >
        <n-row :gutter="16">
          <n-col span="24">
            <n-form-item
              path="code"
              label="Codigo"
              :feedback="formPrintErrors?.code"
            >
              <n-input
                type="text"
                v-model:value="formPrint.code"
                :status="formPrintErrors?.code != undefined ? 'error' : ''"
                @update:value="
                  () =>
                    formPrintErrors != null
                      ? (formPrintErrors.code = null)
                      : () => {}
                "
                clearable
                placeholder="Ingrese observaciones"
              />
            </n-form-item>
          </n-col>
        </n-row>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button
            tertiary
            size="large"
            @click="showModalPrint = false"
            :disabled="loading"
          >
            Cancelar
          </n-button>
          <n-button
            size="large"
            type="primary"
            @click="handlePrint"
            :loading="loading"
          >
            Guardar
          </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  AcademicRecordPrintFormDTO,
  AcademicRecordPrintFormErrorsDTO,
} from "@/app/modules/AcademicRecord/types/AcademicRecord.types";
import {
  _getRecordPdf,
  _printRecord,
} from "@/app/modules/AcademicRecord/services/academicRecord.services";
import type { FormInst } from "naive-ui";

const emit = defineEmits(["edit", "delete", "success"]);

const props = defineProps<{
  item: any;
}>();

const records = ref<any[]>(props.item.records);

const showModalPrint = ref<boolean>(false);
const showModal = ref<boolean>(false);

const loading = ref<boolean>(false);

const formPrintRef = ref<FormInst | null>(null);
const formPrint = ref<AcademicRecordPrintFormDTO>({
  id: null,
  code: null,
});
const formPrintErrors = ref<AcademicRecordPrintFormErrorsDTO | null>(null);

const formPrintRules = ref({
  code: {
    required: true,
    trigger: ["input", "blur"],
    message: "Campo requerido",
  },
});

const handleModalPrint = (record: any) => {

  showModalPrint.value = !showModalPrint.value;
  formPrint.value.id = record.id;
  formPrint.value.code = record.code;
};

const handlePrint = async () => {
  if (formPrintRef.value) {
    const valid = await formPrintRef.value.validate();
    if (valid) {
      await _printRecord(formPrint.value);
      showModalPrint.value = false;
      showModal.value = false;
      emit("success");
    }
  }
  loading.value = false;
};

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
