import type { AcademicSupervisionFormDTO } from "@/app/modules/AcademicSupervision/types/AcademicSupervision.types";

export const _getAcademicSupervisionInitValues =
  (): AcademicSupervisionFormDTO => {
    return {
      id: null,
      groupId: null,
      type: null,
      observations: "",
    };
  };


export const _getAcademicSupervisionRules = () => {
  return {
    groupId: [
      {
        required: true,
        type: "number",
        message: "Obligatorio",
        trigger: "blur",
      },
    ],
    type: [
      {
        required: true,

        message: "Obligatorio",
        trigger: "blur",
      },
    ],
    observations: [
      {
        required: true,
        message: "Obligatorio",
        trigger: "blur",
      },
    ],
  };
};
