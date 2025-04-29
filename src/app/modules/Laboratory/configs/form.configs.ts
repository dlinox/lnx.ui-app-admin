import type { LaboratoryFormDTO } from "@/app/modules/Laboratory/types/Laboratory.types";

export const _getLaboratoryInitValues = (): LaboratoryFormDTO => {
  return {
    id: null,
    name: null,
    type: "LABORATORIO",
    virtualLink: null,
    isEnabled: true,
  };
};

export const _getLaboratoryRules = (form:LaboratoryFormDTO) => {
  return {
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    type: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    virtualLink: [
      {
        required: form.type === "VIRTUAL",
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      //VERIFICAR QUE ES UN LINK VALIDO HTTP O HTTPS
      {
        type: "url",
        trigger: ["blur", "input"],
        message: "No es un link valido",
      },
    ],
  };
};
