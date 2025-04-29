import type { GradeDeadlineFormDTO } from "@/app/modules/GradeDeadline/types/GradeDeadline.types";

export const _getGradeDeadlineInitValues =
  (): GradeDeadlineFormDTO => {
    return {
      id: null,
      startDate: null,
      endDate: null,
      observations: "",
      periodId: null,
    };
  };

export const _getGradeDeadlineExtensionInitValues =
  (): GradeDeadlineFormDTO => {
    return {
      id: null,
      startDate: null,
      endDate: null,
      observations: "",
      periodId: null,
    };
  };

export const _getGradeDeadlineRules = (
  form: GradeDeadlineFormDTO
) => {
  return {
    startDate: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      {
        message: "La fecha de inicio debe ser menor",
        trigger: "blur",
        validator: (_: any, value: string) => {
          if (form.endDate && value > form.endDate) {
            return Promise.reject("La fecha de inicio debe ser menor");
          }
          return Promise.resolve();
        },
      },
    ],
    endDate: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      {
        message: "La fecha de fin debe ser mayor",
        trigger: "blur",
        validator: (_: any, value: string) => {
          if (form.startDate && value < form.startDate) {
            return Promise.reject("La fecha de fin debe ser mayor");
          }
          return Promise.resolve();
        },
      },
    ],
    periodId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
