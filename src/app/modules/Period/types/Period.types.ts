export interface PeriodDTO {
  id: number | null;
  year: number | string | null;
  month: number | string | null;
  status: string | null;
}

export interface PeriodFormDTO extends PeriodDTO {}

export interface PeriodFormErrorsDTO {
  year: string | number | null;
  month: string | number | null;
  status: string | null;
}

