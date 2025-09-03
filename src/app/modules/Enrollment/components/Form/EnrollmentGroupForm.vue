<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      :title="isSpecial ? 'Matricula Especial' : 'Matricula Regular'"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-row :gutter="[16, 16]">
        <n-col span="24" v-if="enrollmetGroup" class="border-b">
          <n-collapse>
            <n-collapse-item title="Cambiar curso" name="1">
              <template #header-extra>
                <LnxIcon icon-name="book" class="text-gray-400" />
              </template>
              <n-form-item label="Módulo">
                <n-select
                  v-model:value="filterForm.moduleId"
                  placeholder="Seleccionar modulo"
                  :options="moduleItems"
                  :virtual-scroll="false"
                  clearable
                  filterable
                  @update:value="onSelectedModule"
                />
              </n-form-item>

              <n-form-item label="Curso">
                <n-select
                  v-model:value="filterForm.courseId"
                  placeholder="Seleccionar curso"
                  :options="courseItems"
                  :virtual-scroll="false"
                  clearable
                  filterable
                  @update:value="onSelectedCourse"
                />
              </n-form-item>
            </n-collapse-item>
          </n-collapse>
        </n-col>
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
                <n-thing @click="onSelectedGroup(item)">
                  <template #header>
                    <n-tag
                      :bordered="false"
                      :type="item.modality == 'VIRTUAL' ? 'info' : 'success'"
                      size="small"
                    >
                      {{ item.modality }}
                    </n-tag>
                    {{ `${item.group} - S/. ${item.price}` }}
                  </template>
                  <template v-if="form.groupId == item.id" #header-extra>
                    <n-button
                      circle
                      type="warning"
                      :render-icon="renderIcon('verify')"
                    ></n-button>
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
                <td class="px-4 py-2">Total importe</td>
                <td class="px-4 py-2 font-bold text-lg text-end">
                  S/.
                  {{
                    payments.reduce(
                      (acc, item: any) => acc + parseFloat(item.amount),
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

              <tr class="bg-gray-100" v-if="enrollmentPrice > 0">
                <td class="px-4 py-2">
                  ¿Incluye matrícula?
                  <strong> S/. {{ enrollmentPrice }}</strong>
                </td>
                <td class="px-4 py-2 font-bold text-lg text-end">
                  <n-switch
                    :disabled="!form.groupId"
                    v-model:value="form.includeEnrollmentPrice"
                    @update:value="handleIncludeEnrollmentPrice"
                  />
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
  _getModulesEnrollmentByStudent,
  _enrollmentGroupStore,
  _getEnabledGroupEnrollment,
  _getEnrollmentGroupPayments,
  _enrollmentGroupUpdate,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { __getItemsByModuleForSelect } from "@/app/modules/Course/services/course.services";
import { renderIcon } from "@/core/utils/icon.utils";
import type { PaymentDTO } from "@/app/modules/Payment/types/Payment.types";
import type { EnrollmentGroupFormDTO } from "../../types/EnrollmentGroup.types";
import { _getFormInitValues } from "../../configs/formGroup.config";
import PaymentForm from "@/app/modules/Payment/components/PaymentForm.vue";
import LnxIcon from "@/core/components/LnxIcon.vue";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  isSpecial: boolean;
  studentId: any;
  curriculumId: any;
  periodId?: any;
  courseId: any;
  enrollmetGroup: any | null;
}>();

const loading = ref<boolean>(false);

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const showPaymentModal = ref<boolean>(false);

const moduleItems = ref<any>([]);
const courseItems = ref<any>([]);
const groupItems = ref<any>([]);

const payments = ref<PaymentDTO[]>([]);
const amount = ref<number>(0);

const enrollmentPrice = ref<number>(0);
const groupPrice = ref<number>(0);

const form = ref<EnrollmentGroupFormDTO>(
  Object.assign({}, { ..._getFormInitValues() })
);

const filterForm = ref<any>({
  moduleId: null,
  courseId: null,
});

const getModulesByStudentItems = async () => {
  const response = await _getModulesEnrollmentByStudent(props.studentId);
  moduleItems.value = response.data;
};

const onSelectedModule = async (value: any) => {
  courseItems.value = await __getItemsByModuleForSelect(value);
  filterForm.value.courseId = null;

  if (value == null) {
    await onSelectedCourse();
  }
};

const onSelectedCourse = async () => {
  let _courseId = filterForm.value.courseId;
  if (!_courseId) {
    _courseId = props.courseId;
    await init();
  } else {
    const response = await _getEnabledGroupEnrollment({
      studentId: props.studentId,
      curriculumId: props.curriculumId,
      courseId: _courseId,
      isSpecial: props.isSpecial,
      periodId: props.periodId,
    });
    groupItems.value = response.data;
    form.value.groupId = null;
    amount.value = 0;
    enrollmentPrice.value = 0;
    groupPrice.value = 0;
    form.value.includeEnrollmentPrice = false;
  }
};

const handleIncludeEnrollmentPrice = (value: boolean) => {
  if (value) {
    amount.value = Number(groupPrice.value) + Number(enrollmentPrice.value);
  } else {
    amount.value = Number(groupPrice.value);
  }
};

const onSuccessPaymentValidation = (value: any) => {
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
    enrollmentPrice.value = item.enrollmentPrice;
    groupPrice.value = item.groupPrice;

    if (props.enrollmetGroup) {
      if (props.enrollmetGroup.withEnrollment) {
        form.value.includeEnrollmentPrice = true;
        amount.value = item.groupPrice + item.enrollmentPrice;
      } else {
        form.value.includeEnrollmentPrice = false;
        amount.value = item.groupPrice;
      }
    } else {
      form.value.includeEnrollmentPrice = item.requireEnrollmentPrice;
      amount.value = item.price;
    }
  } else if (form.value.groupId == item.id) {
    form.value.groupId = null;
    amount.value = 0;
    enrollmentPrice.value = 0;
    groupPrice.value = 0;
    form.value.includeEnrollmentPrice = false;
  } else {
    form.value.groupId = item.id;
    // amount.value = item.price;
    //
    enrollmentPrice.value = item.enrollmentPrice;
    groupPrice.value = item.groupPrice;

    if (props.enrollmetGroup) {
      if (props.enrollmetGroup.withEnrollment) {
        form.value.includeEnrollmentPrice = true;
        amount.value = item.groupPrice + item.enrollmentPrice;
      } else {
        form.value.includeEnrollmentPrice = false;
        amount.value = item.groupPrice;
      }
    } else {
      form.value.includeEnrollmentPrice = item.requireEnrollmentPrice;
      amount.value = item.price;
    }
  }
};

const getEnabledGroupEnrollment = async () => {
  const response = await _getEnabledGroupEnrollment({
    studentId: props.studentId,
    curriculumId: props.curriculumId,
    courseId: props.courseId,
    isSpecial: props.isSpecial,
    periodId: props.periodId,
  });

  groupItems.value = response.data;
};

const removePayment = (index: number) => {
  let item = payments.value[index];
  let token = item.token;
  payments.value.splice(index, 1);
  let payment = form.value.payments.find((pay: any) => pay === token);
  if (!payment) return;
  let indexPayment = form.value.payments.indexOf(payment);
  form.value.payments.splice(indexPayment, 1);
};

const validatePayments = () => {
  let total = payments.value.reduce(
    (acc, item: any) => acc + parseFloat(item.amount),
    0
  );
  return total >= amount.value ? null : "El monto pagado es menor al total";
};

const handleSubmit = async () => {
  form.value.studentId = props.studentId;
  loading.value = true;

  if (props.enrollmetGroup?.id) {
    const response = await _enrollmentGroupUpdate({
      ...form.value,
      isSpecial: props.isSpecial,
      periodId: props.periodId,
    });
    if (response.status) {
      emit("success");
      showModal.value = false;
    }
    loading.value = false;
    return;
  } else {
    const response = await _enrollmentGroupStore({
      ...form.value,
      isSpecial: props.isSpecial,
      periodId: props.periodId,
    });
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

  form.value = _getFormInitValues();

  form.value.payments = [];
  form.value.groupId = null;
  amount.value = 0;

  await getEnabledGroupEnrollment();

  if (props.enrollmetGroup) {
    await getModulesByStudentItems();
    let group = groupItems.value.find(
      (item: any) => item.id == props.enrollmetGroup.groupId
    );
    if (group) {
      form.value.groupId = group.id;
      amount.value = group.price;
      enrollmentPrice.value = group.enrollmentPrice;
      groupPrice.value = group.groupPrice;
      form.value.includeEnrollmentPrice = props.enrollmetGroup.withEnrollment;

      filterForm.value.courseId = null;
      filterForm.value.moduleId = null;

      if (!form.value.includeEnrollmentPrice) {
        amount.value = Number(groupPrice.value);
      }
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
  max-height: 200px;
  overflow-y: auto;
}

.item-selected {
  background-color: #afc9d5c2;
}
</style>
