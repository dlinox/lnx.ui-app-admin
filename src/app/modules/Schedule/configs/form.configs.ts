import type { ScheduleFormDTO } from "@/app/modules/Schedule/types/Schedule.types";

export const _getScheduleInitValues = (): ScheduleFormDTO => {
  return {
    id: null,
    days: [],
    isEnabled: true,
  };
};

export const _getScheduleRules = () => {
  return {
    days: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
