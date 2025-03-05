import type { CourseFormDTO } from "@/app/modules/Course/types/Course.types";

export const _getCourseInitValues = (): CourseFormDTO => {
  return {
    id: null,
    order: 0,
    code: null,
    name: null,
    hoursPractice: 0,
    hoursTheory: 0,
    credits: 0,
    units: 0,
    areaId: null,
    moduleId: null,
    curriculumId: null,
    preRequisiteId: null,
    description: null,
    isEnabled: true,
  };
};

export const _getCourseRules = () => {
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

    name: [
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
    moduleId: [
      {
        type: "number",
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
    preRequisiteId: [],
    description: [],
    isEnabled: [],
  };
};
