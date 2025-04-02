import { defineStore } from "pinia";
import { ref } from "vue";
import { __getActiveEnrollmentPeriod } from "@/app/modules/EnrollmentDeadline/services/enrollmentDeadline.services";
export const usePeriodStore = defineStore("period", () => {
  const enrollment = ref<any | null>(null);
  const getEnrollment = async () => {
    enrollment.value = await __getActiveEnrollmentPeriod();
  };
  return {
    enrollment,
    getEnrollment,
  };
});
