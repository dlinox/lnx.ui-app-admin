export interface AreaDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface AreaFormDTO extends AreaDTO {}

export interface AreaFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

