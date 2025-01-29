import type { LaboratoryFormDTO } from "@/app/modules/Laboratory/types/Laboratory.types";

export const _getLaboratoryInitValues = (): LaboratoryFormDTO => {
  return {
    id: null,
    name: null,
    deviceCount: 0,
    deviceDetail: null,
    isEnabled: true,
  };
};

export const _getLaboratoryRules = () => {
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
