import type { FormItemRule } from "naive-ui";

export const isRequired = (_rule: FormItemRule, value: string) => {
  if (!value) {
    return Promise.reject(new Error("This field is required"));
  }
  return Promise.resolve();
};

export const isEmail = (rule: FormItemRule, value: string) => {
  if (rule.required && !value) {
    return Promise.reject(new Error("Obligatorio"));
  } else if (!value) {
    return Promise.resolve();
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return new Promise<void>((resolve, reject) => {
    if (!emailRegex.test(value)) {
      reject(new Error("Formato de correo inválido"));
    } else {
      resolve();
    }
  });
};
