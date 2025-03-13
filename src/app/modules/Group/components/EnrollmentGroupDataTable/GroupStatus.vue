<template>
    <n-button-group>
        <n-button quaternary>
            {{ status }}
        </n-button>
        <n-dropdown v-if="(status == 'ABIERTO' || status == 'CERRADO') ? true : false" trigger="click"
            :options="options" @select="handleSelect">
            <n-button tertiary :loading="loading">
                <template #icon>
                    <LnxIcon icon-name="edit" />
                </template>
            </n-button>
        </n-dropdown>
    </n-button-group>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

import { _changeStatusGroup } from "@/app/modules/Group/services/enrollment-group.services";

const emit = defineEmits(["success"]);

const props = defineProps<{
    groupId: number;
    status: string;
}>();

const options = computed(() => [
    { label: "Cerrar", key: "CERRADO", disabled: props.status == 'CERRADO' },
    { label: "Reabrir", key: "ABIERTO", disabled: props.status == 'ABIERTO' },
]);

const loading = ref<boolean>(false);

const handleSelect = async (key: any) => {
    loading.value = true;
    await _changeStatusGroup({
        id: props.groupId,
        status: key,
    });
    emit("success");

    loading.value = false;
};
</script>