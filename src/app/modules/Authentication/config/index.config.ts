import type { AuthFormDTO } from "../types/Auth.types";

export const _initStateForm = (): AuthFormDTO => {
  return {
    username: "",
    password: "",
  };
};

export const _getValidationForm = () => {
  return {
    username: {
      required: true,
      trigger: ["blur", "input"],
      message: "Obligatorio",
    },

    password: {
      required: true,
      trigger: ["blur", "input"],
      message: "Obligatorio",
    },
  };
};

export const _getValidationFormResetPassword = () => {
  return {
    email: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      {
        type: "email",
        trigger: ["blur", "input"],
        message: "Email no válido",
      },
    ],
  };
};
