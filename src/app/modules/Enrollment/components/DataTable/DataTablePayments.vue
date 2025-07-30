<template>
  <n-button @click="showModal = true">Pagos</n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="PAGOS"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-thing
        v-for="(item, i) in payments"
        :key="i"
        class="border-dashed border-b"
      >
        <template #avatar>
          <n-image
            v-if="item.fileType === 'img'"
            class="border"
            width="180"
            :src="item.path"
          />
          <iframe
            v-if="item.fileType === 'pdf'"
            class="border"
            width="180"
            height="300"
         :src="'https://docs.google.com/gview?embedded=true&url=' + encodeURIComponent(item.path)">
          ></iframe>
        </template>
        <template #header> S/. {{ item.amount }} </template>
        <template #description>
          <strong>Secuencia:</strong> {{ item.sequenceNumber }}
        </template>
        <template #header-extra>
          {{ item.date }}
        </template>
      </n-thing>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const emit = defineEmits(["update:modelValue", "success"]);

defineProps<{
  payments: any;
}>();

const showModal = ref<boolean>(false);

const init = () => {
  console.log("Inicializando formulario");
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
