import type { ModuleFormDTO } from "@/app/modules/Module/types/Module.types";

export const _getModuleInitValues = (): ModuleFormDTO => {
  return {
    id: null,
    name: null,
    code: null,
    description: null,
    level: null,
    curriculumId: null,
    curriculum: null,
    isExtracurricular: false,
    isEnabled: true,
  };
};

export const _getModuleRules = () => {
  return {
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    code: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    level: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    description: [],
    curriculumId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
