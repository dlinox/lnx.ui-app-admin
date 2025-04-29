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
                Grupos aperturados ({{
                  groupItems?.length ? groupItems.length : 0
                }})
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
                    <n-space size="small">
                      <n-tag :bordered="false" type="info" size="small">
                        {{ item.modality }}
                      </n-tag>
                    </n-space>
                  </template>

                  Min.: <b> {{ item.minStudents }} </b> | Matriculados:
                  <b> {{ item.enrolledStudents }} </b> | Reservados:
                  <b> {{ item.reservedStudents }} </b>
                  <br />
                  <n-tag :bordered="false" type="info" size="small">
                    <strong>
                      {{ item.schedules.days }} -
                      {{ item.schedules.startHour }} a
                      {{ item.schedules.endHour }}
                    </strong>
                  </n-tag>
                </n-thing>
              </n-list-item>
            </n-list>
          </div>
        </n-col>

        <n-col span="24">
          <span
            role="button"
            @click="showPaymentModal = true"
            class="border border-dashed border-gray-300 p-4 rounded-sm flex items-center justify-center cursor-pointer text-gray-400 hover:bg-gray-50 font-bold hover:text-gray-500 mb-4"
          >
            <LnxIcon class="me-3" icon-name="money-add" size="20" />
            Agregar pago
          </span>

          <table class="table-auto w-full">
            <tbody>
              <tr
                v-for="(item, index) in payments"
                :key="index"
                class="border-b border-gray-300 border-dashed px-4 py-2"
              >
                <td class="px-4 py-2 flex items-center">
                  <n-button
                    type="error"
                    size="small"
                    secondary
                    @click="removePayment(index)"
                    :render-icon="renderIcon('trash')"
                  ></n-button>

                  <i class="ms-2">
                    {{ item.sequenceNumber }}
                  </i>
                </td>
                <td class="text-end px-4 py-2">S/. {{ item.amount }}</td>
              </tr>
              <tr class="border-b-2 border-gray-500">
                <td class="px-4 py-2">Total pagado</td>
                <td class="px-4 py-2 font-bold text-lg text-end">
                  S/.
                  {{
                    payments.reduce(
                      (acc, item: any) => acc + parseInt(item.amount),
                      0
                    )
                  }}
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">Total a pagar</td>
                <td class="px-4 py-2 font-bold text-lg text-end">
                  S/. {{ amount }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-red-500 text-sm text-end text-sm">
            {{ validatePayments() }}
          </div>
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
  <PaymentForm
    v-model="showPaymentModal"
    :studentId="props.studentId"
    @success="onSuccessPaymentValidation"
  />
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import {
  _enrollmentGroupStore,
  _getEnabledGroupEnrollment,
  _getEnrollmentGroupPayments,
  _enrollmentGroupUpdate,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { renderIcon } from "@/core/utils/icon.utils";
import type { PaymentDTO } from "@/app/modules/Payment/types/Payment.types";
import type { EnrollmentGroupFormDTO } from "../../types/EnrollmentGroup.types";
import { _getFormInitValues } from "../../configs/formGroup.config";
import PaymentForm from "@/app/modules/Payment/components/PaymentForm.vue";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  studentId: any;
  curriculumId: any;
  courseId: any;
  enrollmetGroup: any | null;
}>();

const loading = ref<boolean>(false);

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const showPaymentModal = ref<boolean>(false);

const groupItems = ref<any>([]);

const payments = ref<PaymentDTO[]>([]);
const amount = ref<number>(0);

const form = ref<EnrollmentGroupFormDTO>(
  Object.assign({}, { ..._getFormInitValues() })
);

const onSuccessPaymentValidation = (value: any) => {
  console.log("Pago validado", value);
  form.value.payments.push(value.token);
  payments.value.push({
    token: value.token,
    amount: value.payment.amount,
    sequenceNumber: value.payment.sequenceNumber,
  });
};

const onSelectedGroup = (item: any) => {
  if (form.value.groupId && form.value.groupId != item.id) {
    form.value.groupId = item.id;
    amount.value = item.price;
  } else if (form.value.groupId == item.id) {
    form.value.groupId = null;
    amount.value = 0;
  } else {
    form.value.groupId = item.id;
    amount.value = item.price;
  }
};

const getEnabledGroupEnrollment = async () => {
  const response = await _getEnabledGroupEnrollment({
    studentId: props.studentId,
    curriculumId: props.curriculumId,
    courseId: props.courseId,
  });

  groupItems.value = response.data;
};

const removePayment = (index: number) => {
  let item = payments.value[index];
  let token = item.token;
  payments.value.splice(index, 1);
  let payment = form.value.payments.find((item: any) => item.token == token);
  if (!payment) return;
  let indexPayment = form.value.payments.indexOf(payment);
  form.value.payments.splice(indexPayment, 1);
};

const validatePayments = () => {
  let total = payments.value.reduce(
    (acc, item: any) => acc + parseInt(item.amount),
    0
  );
  return total >= amount.value ? null : "El monto pagado es menor al total";
};

const handleSubmit = async () => {
  form.value.studentId = props.studentId;
  loading.value = true;

  if (props.enrollmetGroup?.id) {
    const response = await _enrollmentGroupUpdate(form.value);
    if (response.status) {
      emit("success");
      showModal.value = false;
    }
    loading.value = false;
    return;
  } else {
    const response = await _enrollmentGroupStore(form.value);
    if (response.status) {
      emit("success");
      showModal.value = false;
    }
    loading.value = false;
  }
};

const getPayments = async (id: number) => {
  payments.value = await _getEnrollmentGroupPayments({ id: id });
};
const init = async () => {
  payments.value = [];
  form.value.payments = [];
  form.value.groupId = null;
  amount.value = 0;
  await getEnabledGroupEnrollment();
  if (props.enrollmetGroup) {
    let group = groupItems.value.find(
      (item: any) => item.id == props.enrollmetGroup.groupId
    );
    if (group) {
      form.value.groupId = group.id;
      amount.value = group.price;
    }
    form.value.id = props.enrollmetGroup.id;
    await getPayments(props.enrollmetGroup.id);

    if (payments.value.length > 0) {
      payments.value.forEach((item: any) => {
        form.value.payments.push(item.token);
      });
    }
  }
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
  max-height: 300px;
  overflow-y: auto;
}

.item-selected {
  background-color: #afc9d5c2;
}
</style>
