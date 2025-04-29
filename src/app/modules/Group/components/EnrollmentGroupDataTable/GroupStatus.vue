<template>
  <n-button-group>
    <n-button quaternary>
      {{ status }}
    </n-button>
    <n-button
      v-if="status == 'ABIERTO' || status == 'CERRADO' ? true : false"
      tertiary
      @click="showModal = true"
    >
      <template #icon>
        <LnxIcon icon-name="edit" />
      </template>
    </n-button>
  </n-button-group>
  <FormManagerGroup
    v-model="showModal"
    :item="item"
    @success="emit('success')"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import FormManagerGroup from "@/app/modules/Group/components/FormManagerGroup/FormManagerGroup.vue";
import { _changeStatusGroup } from "@/app/modules/Group/services/enrollment-group.services";

const emit = defineEmits(["success"]);

defineProps<{
  groupId: number;
  status: string;
  item: any;
}>();

const showModal = ref<boolean>(false);
</script>
