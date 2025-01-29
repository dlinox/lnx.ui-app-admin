import type { StudentFormDTO } from "@/app/modules/Student/types/Student.types";

export const _getStudentFormInitValues = (): StudentFormDTO => {
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
    studentTypeId: null,
    isEnabled: true,
  };
};

export const _getStudentFormRules = () => {
  return {
    code: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    documentTypeId: [
      {
        type: "number",
        required: true,
        trigger: ["blur"],
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
    studentTypeId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
