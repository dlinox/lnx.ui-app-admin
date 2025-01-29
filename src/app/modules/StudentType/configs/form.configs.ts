import type { StudentTypeFormDTO } from "@/app/modules/StudentType/types/StudentType.types";

export const _getStudentTypeInitValues = (): StudentTypeFormDTO => {
  return {
    id: null,
    name: null,
    isEnabled: true,
  };
};

export const _getStudentTypeRules = () => {
  return {
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
