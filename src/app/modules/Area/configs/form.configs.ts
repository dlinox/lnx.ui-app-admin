import type { AreaFormDTO } from "@/app/modules/Area/types/Area.types";

export const _getAreaInitValues = (): AreaFormDTO => {
  return {
    id: null,
    name: null,
    curriculumId: null,
    isEnabled: true,
  };
};

export const _getAreaRules = () => {
  return {
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
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
