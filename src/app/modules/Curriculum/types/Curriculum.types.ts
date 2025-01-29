export interface CurriculumDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface CurriculumFormDTO extends CurriculumDTO {}

export interface CurriculumFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

export interface CurriculumModuleDTO {
  id: number | null;
  order: number;
  module: string | null;
  area: string | null;
  isExtracurricular: boolean;
  isEnabled: boolean;
}

export interface CurriculumModuleFormDTO {
  id: number | null;
  order: number;
  areaId: number | null;
  moduleId: number | null;
  curriculumId: number | null;
  isExtracurricular: boolean;
  isEnabled: boolean;
}

export interface CurriculumModuleFormErrorsDTO {
  order: string | null;
  areaId: string | null;
  moduleId: string | null;
  curriculumId: string | null;
  isExtracurricular: string | null;
  isEnabled: string | null;
}

export interface CurriculumModuleCourseDTO {
  id: number | null;
  order: number;
  code: string | null;
  hoursPractice: number;
  hoursTheory: number;
  credits: number;
  course: string | null;
  preRequisite: string | null;
  isEnabled: boolean;
}

export interface CurriculumModuleCourseFormDTO {
  id: number | null;
  order: number;
  code: string | null;
  hoursPractice: number;
  hoursTheory: number;
  credits: number;
  courseId: string | null;
  curriculumModuleId: number | null;
  preRequisiteId: number | null;
  isEnabled: boolean;
}

export interface CurriculumModuleCourseFormErrorsDTO {
  order: string | null;
  code: string | null;
  hoursPractice: string | null;
  hoursTheory: string | null;
  credits: string | null;
  courseId: string | null;
  curriculumModuleId: string | null;
  preRequisiteId: string | null;
  isEnabled: string | null;
}
