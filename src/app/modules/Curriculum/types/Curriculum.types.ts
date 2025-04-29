export interface CurriculumDTO {
  id: number | null;
  name: string | null;
  gradingModel: number;
  isEnabled: boolean;
}

export interface CurriculumFormDTO extends CurriculumDTO {}

export interface CurriculumFormErrorsDTO {
  name: string | null;
  gradingModel: string | null;
  isEnabled: string | null;
}

export interface CurriculumCourseDTO {
  id: number | null;
  order: number;
  code: string | null;
  hoursPractice: number | null;
  hoursTheory: number | null;
  credits: number;
  course: string | null;
  area: string | null;
  module: string | null;
  curriculumId: number;
  preRequisite: string | null;
  isExtracurricular: boolean;
  isEnabled: boolean;
}

export interface CurriculumCourseDataTableItemDTO {
  id: number;
  order: number;
  code: string | null;
  hoursPractice: number | null;
  hoursTheory: number | null;
  credits: number;
  course: string;
  area: string;
  module: string;
  curriculumId: number;
  preRequisite: string | null;
  isExtracurricular: boolean;
  isEnabled: boolean;
}

export interface CurriculumCourseFormDTO {
  id: number | null;
  order: number;
  code: string | null;
  hoursPractice: number;
  hoursTheory: number;
  credits: number;
  courseId: string | null;
  areaId: number | null;
  moduleId: number | null;
  curriculumId: number | null;
  preRequisiteId: number | null;
  isExtracurricular: boolean;
  isEnabled: boolean;
}

export interface CurriculumCourseFormErrorsDTO {
  order: string | null;
  code: string | null;
  hoursPractice: string | null;
  hoursTheory: string | null;
  credits: string | null;
  courseId: string | null;
  areaId: string | null;
  moduleId: string | null;
  curriculumId: string | null;
  preRequisiteId: string | null;
  isExtracurricular: string | null;
  isEnabled: string | null;
}
