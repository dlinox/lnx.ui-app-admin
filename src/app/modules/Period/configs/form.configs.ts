import type { PeriodFormDTO } from "@/app/modules/Period/types/Period.types";

export const _getPeriodInitValues = (): PeriodFormDTO => {
  return {
    id: null, 
    year: new Date().getFullYear(),
    month: null,
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
