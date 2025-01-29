import type { TeacherFormDTO } from "@/app/modules/Teacher/types/Teacher.types";

export const _getTeacherFormInitValues = (): TeacherFormDTO => {
  return {
    id: null,
    personId: null,
    code: null,
    documentTypeId: 1,
    documentNumber: null,
    name: null,
    lastNameFather: null,
    lastNameMother: null,
    gender: null,
    email: null,
    phone: null,
    address: null,
    isEnabled: true,
  };
};

export const _getTeacherFormRules = () => {
  return {
    code: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    documentNumber: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    lastNameFather: [],
    lastNameMother: [],
    gender: [],
    email: [],
    phone: [],
    address: [],
    TeacherTypeId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
