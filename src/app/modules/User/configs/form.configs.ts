import type { UserFormDTO } from "@/app/modules/User/types/User.types";

export const _getUserInitValues = (level: string): UserFormDTO => {
  return {
    id: null,
    name: null,
    username: null,
    email: null,
    role: null,
    password: null,
    level: level,
    isEnabled: true,
    modelId: null,
  };
};

export const _getUserRules = () => {
  return {
    modelId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
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
    username: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    email: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    role: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
        message: "Obligatorio",
      },
    ],
    password: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      {
        min: 6,
        message: "Mínimo 6 caracteres",
        trigger: ["blur", "input"],
      },
    ],
  };
};
