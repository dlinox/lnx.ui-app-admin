<template>
  <div style="border-bottom: 1px solid #e9e9e9">
    <n-row :gutter="12" style="padding: 12px 16px">
      <n-col :span="12"> </n-col>
      <n-col :span="12">
        <n-input
          size="large"
          placeholder="Buscar"
          v-model:value="request.search"
          @input="debouncedReload"
          clearable
        >
          <template #suffix>
            <LnxIcon icon-name="search-normal-1" size="20" />
          </template>
        </n-input>
      </n-col>
    </n-row>
    <n-row>
      <n-col :span="24">
        <n-data-table
          key="id"
          remote
          :single-line="false"
          :columns="columns"
          :data="items"
          :pagination="_createPagination(pagination)"
          :pagination-show-size-picker="true"
          :loading="loadingTable"
          @update:page="onPageChange"
          @update:page-size="onPageSizeChange"
        />
      </n-col>
    </n-row>

    <slot
      name="extra"
      :reLoadDataTable="reLoadDataTable"
      :roleOptions="roleOptions"
    >
    </slot>
  </div>
  <UserForm
    v-model="showModal"
    :item="editItem"
    :level="props.level"
    :roleOptions="roleOptions"
    @success="reLoadDataTable"
  />
  <AccountUserForm
    v-model="showModalAccount"
    :item="editItem"
    :level="props.level"
    :roleOptions="roleOptions"
    @success="reLoadDataTable"
  />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";

import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import {
  _createColumns,
  _createPagination,
} from "@/app/modules/User/configs/dataTable.configs";

import {
  _loadDataTable,
  _deleteItem,
} from "@/app/modules/User/services/user.services";

import UserForm from "@/app/modules/User/components/UserForm.vue";
import AccountUserForm from "@/app/modules/User/components/AccountUserForm.vue";
import debounce from "@/core/utils/debounce.utils";
import LnxIcon from "@/core/components/LnxIcon.vue";
import { __getRolesForSelect } from "@/app/modules/Role/services/role.services";
import { type UserDTO } from "@/app/modules/User/types/User.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

const props = defineProps<{
  level: string;
}>();

const loadingTable = ref(false);
const items = ref<UserDTO[]>([]);
const showModalAccount = ref<boolean>(false);
const showModal = ref<boolean>(false);
const editItem = ref<UserDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });

const roleOptions = ref<ItemSelectDTO[]>([]);

const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
} as DataTableRequestDTO);
const response = ref<DataTableResponseDTO<UserDTO>>(
  {} as DataTableResponseDTO<UserDTO>
);

const openFormModal = (item: UserDTO | null) => {
  editItem.value = item;
  if (props.level === "student" || props.level === "teacher") {
    showModalAccount.value = true;
  } else {
    showModal.value = true;
  }
};

const deleteItem = async (item: UserDTO) => {
  await _deleteItem(item);
  await reLoadDataTable();
};

const columns = _createColumns(openFormModal, deleteItem);

const reLoadDataTable = async () => {
  request.value.page = 1;
  await loadDataTable();
};

const loadDataTable = async () => {
  loadingTable.value = true;
  response.value = await _loadDataTable(request.value);
  items.value = response.value.data;
  pagination.total = response.value.total;
  pagination.pageSize = response.value.per_page;
  pagination.page = response.value.current_page;
  pagination.pageCount = response.value.last_page;
  loadingTable.value = false;
};

const debouncedReload = debounce(() => {
  reLoadDataTable();
}, 400);

const onPageChange = async (page: number) => {
  request.value.page = page;
  await loadDataTable();
};

const onPageSizeChange = async (pageSize: number) => {
  request.value.page = 1;
  request.value.pageSize = pageSize;
  await loadDataTable();
};

const init = async () => {
  request.value.filters = {
    level: props.level,
  };
  roleOptions.value = await __getRolesForSelect(props.level);
  await loadDataTable();
};

init();
</script>
