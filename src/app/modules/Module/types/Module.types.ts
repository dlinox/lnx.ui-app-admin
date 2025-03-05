export interface ModuleDTO {
  id: number | null;
  name: string | null;
  code: string | null;
  isExtracurricular: boolean;
  curriculumId: number | null;
  curriculum: string | null;
  isEnabled: boolean;
}

export interface ModuleFormDTO extends ModuleDTO {}

export interface ModuleFormErrorsDTO {
  name: string | null;
  code: string | null;
  isExtracurricular: string | null;
  curriculumId: string | null;
  curriculum: string | null;
  isEnabled: string | null;
}
