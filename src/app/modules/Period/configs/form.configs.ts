import type { PeriodFormDTO } from "@/app/modules/Period/types/Period.types";

export const _getPeriodInitValues = (): PeriodFormDTO => {
  return {
    id: null,
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    status: null,
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
    status: [
      {
        required: true,
        trigger: ["blur", "change"],
        message: "Obligatorio",
      },
    ],
  };
};
