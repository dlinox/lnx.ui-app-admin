import type { PeriodFormDTO } from "@/app/modules/Period/types/Period.types";

export const _getPeriodInitValues = (): PeriodFormDTO => {
  return {
    id: null,
    //current year 
    year: new Date().getFullYear(),
    month: null,
    isEnabled: false,
  };
};

export const _getPeriodRules = () => {
  return {
    year: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    month: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
