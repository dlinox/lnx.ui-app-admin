export interface PeriodDTO {
  id: number | null;
  year: number | string | null;
  month: number | string | null;
  isEnabled: boolean;
}

export interface PeriodFormDTO extends PeriodDTO {}

export interface PeriodFormErrorsDTO {
  year: string | number | null;
  month: string | number | null;
  isEnabled:  null;
}

