export interface StudentTypeDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface StudentTypeFormDTO extends StudentTypeDTO {}

export interface StudentTypeFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

