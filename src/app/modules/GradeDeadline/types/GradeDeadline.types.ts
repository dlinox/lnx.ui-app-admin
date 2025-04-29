export interface GradeDeadlineDTO {
  id: number | null;
  startDate: string | null;
  endDate: string | null;
  type: string | null;
  periodId: number | null;
  observations: string | null;
  period: string | null;
  lastDate: string | null;
}

export type GradeDeadlineFormDTO = Omit<
  GradeDeadlineDTO,
  "period" | "type" | "lastDate"
>;

export interface GradeDeadlineFormErrorsDTO {
  startDate: string | null;
  endDate: string | null;
  type: string | null;
  observations: string | null;
  periodId: string | null;
}
