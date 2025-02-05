import type { SessionTimeFormDTO } from "@/app/modules/SessionTime/types/SessionTime.types";

export const _getSessionTimeInitValues = (): SessionTimeFormDTO => {
  return {
    id: null,
    startTime: "",
    endTime: "",
    isEnabled: true,
  };
};

export const _getSessionTimeRules = () => {
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
