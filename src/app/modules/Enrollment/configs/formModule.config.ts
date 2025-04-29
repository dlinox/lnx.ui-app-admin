import type { EnrollmentModuleFormDTO } from "../types/Enrollment.types";

export const _getFormInitValues = (): EnrollmentModuleFormDTO => {
  return {
    studentId: null,
    curriculumId: null,
    moduleId: null,
    courseId: null,
    groupId: null,
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
    courseId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    groupId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
