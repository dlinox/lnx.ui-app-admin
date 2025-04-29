export interface ModuleDTO {
  id: number | null;
  name: string | null;
  code: string | null;
  description: string | null;
  level: number | null;
  isExtracurricular: boolean;
  curriculumId: number | null;
  curriculum: string | null;
  isEnabled: boolean;
}

export interface ModuleFormDTO extends ModuleDTO {}

export interface ModuleFormErrorsDTO {
  name: string | null;
  code: string | null;
  description: string | null;
  level: string | null;
  isExtracurricular: string | null;
  curriculumId: string | null;
  curriculum: string | null;
  isEnabled: string | null;
}
