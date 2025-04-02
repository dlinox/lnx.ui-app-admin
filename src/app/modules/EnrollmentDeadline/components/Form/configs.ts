import type { EnrollmentDeadlineFormDTO } from "@/app/modules/EnrollmentDeadline/types/EnrollmentDeadline.types";

export const _getEnrollmentDeadlineInitValues =
  (): EnrollmentDeadlineFormDTO => {
    return {
      id: null,
      startDate: null,
      endDate: null,
      observations: "",
      periodId: null,
      virtual: true,
    };
  };

export const _getEnrollmentDeadlineExtensionInitValues =
  (): EnrollmentDeadlineFormDTO => {
    return {
      id: null,
      startDate: null,
      endDate: null,
      observations: "",
      virtual: true,
      periodId: null,
    };
  };

export const _getEnrollmentDeadlineRules = (
  form: EnrollmentDeadlineFormDTO
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
