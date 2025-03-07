import type { EnrollmentModuleFormDTO } from "../types/Enrollment.types";

export const _getFormInitValues = (): EnrollmentModuleFormDTO => {
  return {
    studentId: null,
    curriculumId: null,
    moduleId: null,
    payments: [],
  };
};

export const _getFormRules = () => {
  return {
    studentId: [],
    curriculumId: [],
    moduleId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
