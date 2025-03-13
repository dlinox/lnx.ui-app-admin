import type { EnrollmentGroupFormDTO } from "../types/EnrollmentGroup.types";

export const _getFormInitValues = (): EnrollmentGroupFormDTO => {
  return {
    id: null,
    studentId: null,
    groupId: null,
    payments: [],
  };
};

export const _getFormRules = () => {
  return {
    studentId: [],
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
