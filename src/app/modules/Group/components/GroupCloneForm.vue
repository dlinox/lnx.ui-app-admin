<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      title="Clonar Grupos de un Periodo a Otro"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
    >
      <n-alert title="¡Importante!" type="default" closable class="mb-4">
        <template #icon>
          <LnxIcon iconName="information" />
        </template>
        Para evitar problemas, la clonación solo está disponible si no hay
        matrículas en este periodo académico. Antes de continuar, verifica esta
        condición.
      </n-alert>
      <n-form ref="formRef" :model="form" :rules="rules">
        <n-row :gutter="16">
          <n-col :span="24">
            <n-form-item
              label="Periodo Académico de referencia"
              path="periodReferenceId"
            >
              <n-select
                v-model:value="form.periodReferenceId"
                placeholder="Seleccionar Periodo Académico"
                filterable
                :options="optionsPeirod"
                :loading="loadingSearchPeriod"
                clearable
                remote
                :virtual-scroll="false"
                @search="debouncedhandleSearchPeriod"
              />
            </n-form-item>
          </n-col>
        </n-row>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showModal = false">Cancelar</n-button>
          <n-button type="primary" @click="submitForm"> Aceptar </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { type FormInst, type SelectOption } from "naive-ui";

import { __searchPeriods } from "@/app/shared/services/selectables.services";

import { _clone } from "@/app/modules/Group/services/group.services";

import debounce from "@/core/utils/debounce.utils";

const emit = defineEmits(["update:modelValue", "success", "cancel"]);

const props = defineProps<{
  modelValue: boolean;
  curriculumId: number;
  periodId: number;
}>();

const rules = {
  periodReferenceId: {
    trigger: ["change", "blur"],
    type: "number",
    required: true,
    message: "Este campo es requerido",
  },
};

const loadingSearchPeriod = ref<boolean>(false);
const optionsPeirod = ref<SelectOption[]>([]);

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  optionsPeirod.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const debouncedhandleSearchPeriod = debounce((search) => {
  handleSearchPeriod(search);
}, 400);

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const formRef = ref<FormInst | null>(null);

const formInitState = {
  periodId: null,
  periodReferenceId: null,
  curriculumId: null,
};

const form = ref<any>(Object.assign({}, formInitState));

const submitForm = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();

    if (valid) {
      form.value.curriculumId = props.curriculumId;
      form.value.periodId = props.periodId;
      console.log("form", form.value);
      const response = await _clone(form.value);
      if (response) {
        emit("success");
        showModal.value = false;
      }
    }
  }
};

const initForm = () => {};

watch(
  () => props.modelValue,
  async (value) => {
    if (value) {
      await handleSearchPeriod("");
      initForm();
    }
  }
);
</script>
