import type { CourseFormDTO } from "@/app/modules/Course/types/Course.types";

export const _getCourseInitValues = (): CourseFormDTO => {
  return {
    id: null,
    name: null,
    isEnabled: true,
  };
};

export const _getCourseRules = () => {
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
