export interface AcademicSupervisionDTO {
  id: number | null;
  groupId: number | null;
  course: string | null;
  period: string | null;
  teacher: string | null;
  type: string | null;
  observations: string | null;
}

export interface AcademicSupervisionFormDTO {
  id: number | null;
  groupId: number | null;
  type: string | null;
  observations: string | null;
}

export interface AcademicSupervisionFormErrorsDTO {
  groupId: string | null;
  type: string | null;
  observations: string | null;
}
