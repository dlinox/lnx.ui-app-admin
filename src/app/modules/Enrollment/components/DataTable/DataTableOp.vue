<template>
  <EditEnrollmentGroup v-if="periodStore.enrollment?.period == item.period" :item="item"
    @resetEnrollment="($event) => emit('openForm', $event)" @changeGroup="($event) => emit('openForm', $event)"
    @reserveEnrollment="emit('success')" @cancelEnrollment="emit('success')" />

</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";
import {
  _getStudentEnrollment,
  _downloadEnrollmentPDF,
} from "@/app/modules/Enrollment/services/enrollment.services";
import { __getStudentTypesForSelect } from "@/app/modules/StudentType/services/studentType.services";
import { __getInfoById } from "@/app/modules/Student/services/student.services";
import { __getDocumentTypesForSelect } from "@/app/modules/DocumentType/services/documentType.services";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import { usePeriodStore } from "@/app/store/period.stores";

import EditEnrollmentGroup from "@/app/modules/Enrollment/components/EditEnrollmentGroup/EditEnrollmentGroup.vue";

const emit = defineEmits(["openForm", "success"]);

defineProps<{
  item: any;
}>();

const periodStore = usePeriodStore();

const initView = async () => {
};

onMounted(() => {
  initView();
});
</script>
