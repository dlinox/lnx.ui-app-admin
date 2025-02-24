import type { CoursePriceDataTableItemDTO } from "../types/CoursePrice.types";

export const _getPriceInitValues = (): CoursePriceDataTableItemDTO => {
  return {
    id: null,
    curriculumId: null,
    courseId: null,
    studentTypeId: null,
    presentialPrice: 0,
    virtualPrice: 0,
    isEnabled: true,
  };
};

export const _getPriceRules = () => {
  return {
    moduleId: [{ required: true, message: "Obligatório" }],
    studentTypeId: [{ required: true, message: "Obligatório" }],
    presentialPrice: [],
    virtualPrice: [],
  };
};
