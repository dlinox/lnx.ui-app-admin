import type {
  CurriculumFormDTO,
  CurriculumModuleFormDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";

export const _getCurriculumInitValues = (): CurriculumFormDTO => {
  return {
    id: null,
    name: null,
    isEnabled: true,
  };
};

export const _getCurriculumRules = () => {
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

export const _getCurriculumModuleInitValues = (): CurriculumModuleFormDTO => {
  return {
    id: null,
    order: 0,
    areaId: null,
    moduleId: null,
    curriculumId: null,
    isExtracurricular: false,
    isEnabled: true,
  };
};

export const _getCurriculumModuleRules = () => {
  return {
    order: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};

export const _getCurriculumModuleCourseInitValues = () => {
  return {
    id: null,
    order: 0,
    code: null,
    hoursPractice: 0,
    hoursTheory: 0,
    credits: 0,
    curriculumModuleId: null,
    courseId: null,
    preRequisiteId: null,
    isEnabled: true,
  };
};

export const _getCurriculumModuleCourseRules = () => {
  return {
    order: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
