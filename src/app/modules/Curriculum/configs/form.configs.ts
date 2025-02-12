import type { CurriculumFormDTO } from "@/app/modules/Curriculum/types/Curriculum.types";

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

export const _getCurriculumCourseInitValues = () => {
  return {
    id: null,
    order: 0,
    code: null,
    hoursPractice: 0,
    hoursTheory: 0,
    credits: 0,
    courseId: null,
    areaId: null,
    moduleId: null,
    curriculumId: null,
    preRequisiteId: null,
    isExtracurricular: false,
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
    code: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],

    hoursPractice: [],
    hoursTheory: [],
    credits: [],
    courseId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    areaId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    moduleId: [],
    curriculumId: [],
    preRequisiteId: [],
    isExtracurricular: [],
    isEnabled: [],
  };
};
