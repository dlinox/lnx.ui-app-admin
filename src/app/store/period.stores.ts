import {
  __current,
  __enrollment,
} from "@/app/modules/Period/services/period.services";

import { defineStore } from "pinia";
import { ref } from "vue";
export const usePeriodStore = defineStore("period", () => {
  const current = ref<any | null>(null);
  const enrollment = ref<any | null>(null);
  const getCurrent = async () => {
    current.value = await __current();
  };
  const getEnrollment = async () => {
    enrollment.value = await __enrollment();
  };
  return {
    current,
    getCurrent,
    enrollment,
    getEnrollment,
  };
});
