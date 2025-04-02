import type { ChangePasswordFormDTO } from "../../types/Profile.types";

export const _getFormInitValues = (): ChangePasswordFormDTO => {
  return {
    password: "",
    newPassword: "",
    confirmPassword: "",
  };
};

export const _getFormValidate = (form: ChangePasswordFormDTO) => {
  return {
    password: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    newPassword: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],

    confirmPassword: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      {
        validator: (_rule: any, value: string, callback: any) => {
          if (value !== form.newPassword) {
            callback(new Error("Las contraseñas no coinciden"));
          } else {
            callback();
          }
        },
        trigger: ["blur", "input"],
      },
    ],
  };
};
