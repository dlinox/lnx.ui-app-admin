export interface SessionTimeDTO {
  id: number | null;
  startTime: string;
  endTime: string;
  isEnabled: boolean;
}

export interface SessionTimeFormDTO extends SessionTimeDTO {}

export interface SessionTimeFormErrorsDTO {
  startTime: string | null;
  endTime: string | null;
  isEnabled: string | null;
}
