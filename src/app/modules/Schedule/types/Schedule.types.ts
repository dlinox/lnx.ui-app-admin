export interface ScheduleDTO {
  id: number | null;
  days: string[] | string;
  isEnabled: boolean;
}

export interface ScheduleFormDTO extends ScheduleDTO {}

export interface ScheduleFormErrorsDTO {
  days: string | null;
  isEnabled: string | null;
}
