export interface CourseDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface CourseFormDTO extends CourseDTO {}

export interface CourseFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

