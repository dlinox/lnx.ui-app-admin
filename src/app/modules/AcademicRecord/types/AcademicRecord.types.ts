export interface AcademicRecordDTO {
  id: number | null;
  group: string | null;
  course: string | null;
  teacher: string | null;
  period: string | null;
  observations: string | null;
  createdAt: string | null;
}

export interface AcademicRecordPrintFormDTO {
  id: number | null;
  code: string | null;
}

export interface AcademicRecordPrintFormErrorsDTO {
  id: string | null;
  code: string | null;
}
