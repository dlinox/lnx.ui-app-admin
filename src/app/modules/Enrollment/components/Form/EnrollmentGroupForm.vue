<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      title="MATRICULA EN GRUPO"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-row :gutter="[16, 16]">
        <n-col span="24">
          <div class="wrapper-list-groups">
            <n-list hoverable clickable>
              <template #header>
                Grupos aperturados ({{ groupItems.length }})
              </template>
              <n-list-item
                v-for="item in groupItems"
                :key="item.id"
                :class="{ 'item-selected': form.groupId == item.id }"
                :extra="item.price"
              >
                <n-thing
                  :title="`${item.group} - S/. ${item.price}`"
                  @click="onSelectedGroup(item)"
                >
                  <template v-if="form.groupId == item.id" #header-extra>
                    <n-button
                      circle
                      type="warning"
                      :render-icon="renderIcon('verify')"
                    ></n-button>
                  </template>
                  <template #description>
                    <n-space size="small" style="margin-top: 4px">
                      <n-tag :bordered="false" type="info" size="small">
                        {{ item.modality }}
                      </n-tag>
                    </n-space>
                  </template>

                  Docente: <b> {{ item.teacher }} </b>
                  <br />
                  Laboratorio: <b> {{ item.laboratory }} </b>
                  <br />
                  <n-tag
                    v-for="(j, index) in item.schedules"
                    :key="index"
                    :bordered="false"
                    type="info"
                    size="small"
                  >
                    {{ j.day }} - {{ j.startHour }} - {{ j.endHour }}
                  </n-tag>
                </n-thing>
              </n-list-item>
            </n-list>
          </div>
        </n-col>
        <n-col span="24" v-if="form.payment.length == 0">
          <n-card title="Información de pago" size="small">
            <n-row :gutter="[16, 16]">
              <n-col span="12">
                <n-input
                  v-model:value="paymentRequest.amount"
                  placeholder="Monto"
                  type="number"
                />
              </n-col>
              <n-col span="12">
                <n-date-picker
                  v-model:value="paymentRequest.date"
                  placeholder="Fecha de pago"
                />
              </n-col>
              <n-col span="12">
                <n-input
                  v-model:value="paymentRequest.sequenceNumber"
                  placeholder="Secuencia"
                  type="number"
                />
              </n-col>
              <n-col span="12">
                <n-select
                  :virtual-scroll="false"
                  v-model:value="paymentRequest.paymentTypeId"
                  placeholder="Metodo de pago"
                  :options="[
                    { label: 'BN - VENTANILLA', value: 7 },
                    { label: 'BN - PAGALO.PE', value: 9 },
                  ]"
                  clearable
                />
              </n-col>
              <n-col span="24">
                <n-button
                  :loading="loadingPaymentValidation"
                  secondary
                  type="primary"
                  @click="handleValidatePayment"
                  block
                  :render-icon="renderIcon('money-tick')"
                >
                  Validar Pago
                </n-button>
              </n-col>
            </n-row>
          </n-card>
        </n-col>
        <n-col span="24">
          <n-statistic
            style="background-color: #afc9d5c2; padding: 0.5rem"
            v-for="item in form.payment"
            :key="item.sequenceNumber"
            :label="`${item.sequenceNumber} | ${
              new Date(item.date).toISOString().split('T')[0]
            }`"
            :value="`S/. ${item.amount}`"
          ></n-statistic>
        </n-col>
        <n-col span="24">
          <n-button
            size="large"
            type="primary"
            @click="handleSubmit"
            block
            :loading="loading"
          >
            Realizar Matricula
          </n-button>
        </n-col>
      </n-row>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  _enrollmentGroupStore,
  _validatePaymentEnrollment,
  _getEnabledGroupEnrollment,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { renderIcon } from "@/core/utils/icon.utils";
const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  studentId: any;
  curriculumId: any;
  curriculumCourseId: any;
}>();

const loadingPaymentValidation = ref<boolean>(false);
const loading = ref<boolean>(false);

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const groupItems = ref<any>([]);

const paymentRequest = ref<any>({
  studentId: null,
  amount: null,
  date: null,
  sequenceNumber: null,
  paymentTypeId: null,
});

const form = ref<any>({
  studentId: null,
  curriculumId: null,
  groupId: null,
  payment: [],
});

const onSelectedGroup = (item: any) => {
  if (form.value.groupId && form.value.groupId != item.id) {
    form.value.payment = [];
    form.value.groupId = item.id;
    paymentRequest.value.amount = item.price;
  }
  if (form.value.groupId == item.id) {
    form.value.groupId = null;
    paymentRequest.value.amount = null;
    form.value.payment = [];
  } else {
    form.value.groupId = item.id;
    paymentRequest.value.amount = item.price;
  }
};

const handleValidatePayment = async () => {
  paymentRequest.value.studentId = props.studentId;
  loadingPaymentValidation.value = true;
  const response = await _validatePaymentEnrollment(paymentRequest.value);
  if (response.status) {
    let payment = {
      ...paymentRequest.value,
      token: response.data,
    };
    form.value.payment.push(payment);

    paymentRequest.value = {
      studentId: props.studentId,
      amount: null,
      date: null,
      sequenceNumber: null,
      paymentTypeId: null,
    };
  }
  loadingPaymentValidation.value = false;
};

const getModulesEnrollmentItems = async () => {
  const response = await _getEnabledGroupEnrollment({
    studentId: props.studentId,
    curriculumId: props.curriculumId,
    curriculumCourseId: props.curriculumCourseId,
  });

  groupItems.value = response.data;
};

const handleSubmit = async () => {
  form.value.studentId = props.studentId;
  form.value.curriculumId = props.curriculumId;
  loading.value = true;
  const response = await _enrollmentGroupStore(form.value);
  if (response.status) {
    emit("success");
    showModal.value = false;
  }
  loading.value = false;

  console.log("Guardando matricula", form.value);
};

const init = async () => {
  await getModulesEnrollmentItems();
  console.log("Inicializando formulario");
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>

<style>
.wrapper-list-groups {
  width: 100%;
  max-height: 220px;
  overflow-y: auto;
}
.item-selected {
  background-color: #afc9d5c2;
}
</style>
