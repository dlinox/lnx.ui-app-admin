export interface AreaDTO {
  id: number | null;
  name: string | null;
  curriculumId: number | null;
  isEnabled: boolean;
}

export interface AreaFormDTO extends AreaDTO {}

export interface AreaFormErrorsDTO {
  name: string | null;
  curriculumId: string | null;
  isEnabled: string | null;
}
