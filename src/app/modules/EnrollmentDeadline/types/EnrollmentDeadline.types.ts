export interface EnrollmentDeadlineDTO {
  id: number | null;
  startDate: string | null;
  endDate: string | null;
  type: string | null;
  periodId: number | null;
  observations: string | null;
  period: string | null;
  virtual: boolean;
  lastDate: string | null;
  //   reference: string | null;
  //   referenceId: number | null;
}

export type EnrollmentDeadlineFormDTO = Omit<
  EnrollmentDeadlineDTO,
  "period" | "type" | "lastDate"
>;

export interface EnrollmentDeadlineFormErrorsDTO {
  startDate: string | null;
  endDate: string | null;
  type: string | null;
  observations: string | null;
  virtual: string | null;
  periodId: string | null;
}
