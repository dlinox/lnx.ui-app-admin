<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      title="Asignar Permisos"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-row>
        <n-collapse default-expanded-names="1" accordion>
          <n-collapse-item
            v-for="(permission, index) in allPermissions"
            :key="index"
            :name="index"
            :title="permission.display_name"
          >
            <n-checkbox-group v-model:value="form.permissions" :size="'large'">
              <n-space item-style="display: flex;">
                <n-checkbox
                  v-for="element in permission.children"
                  :key="element.id"
                  :value="element.id"
                  :label="element.display_name"
                />
              </n-space>
            </n-checkbox-group>
          </n-collapse-item>
        </n-collapse>
      </n-row>
      <template #footer>
        <n-space justify="end">
          <n-button
            tertiary
            size="large"
            @click="showModal = false"
            :disabled="loading"
          >
            Cancelar
          </n-button>
          <n-button
            size="large"
            type="primary"
            @click="handleSubmit"
            :loading="loading"
            >Guardar</n-button
          >
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { type RoleDTO } from "@/app/modules/Role/types/Role.types";

import {
  _getRoleInitValues,
  _getRoleRules,
} from "@/app/modules/Role/configs/form.configs";

import {
  _getPermissions,
  _asignPermissions,
} from "@/app/modules/Role/services/role.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: RoleDTO;
  level: string;
  modelValue: boolean;
}>();

const allPermissions = ref<any[]>([]);
const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);

const form = ref<RoleDTO>({} as RoleDTO);

const getPermissions = async () => {
  try {
    loading.value = true;
    const response = await _getPermissions();
    allPermissions.value = response;
  } catch (error) {
    console.error("Error fetching permissions:", error);
  } finally {
    loading.value = false;
  }
};
const handleSubmit = async () => {
  loading.value = true;
  let response = await _asignPermissions(form.value);
  if (response) {
    emit("success", response);
    showModal.value = false;
  }
  loading.value = false;
};

const initForm = () => {};

watch(showModal, (value) => {
  if (value) {
    form.value = props.item;
    getPermissions();
    initForm();
  }
});
</script>
