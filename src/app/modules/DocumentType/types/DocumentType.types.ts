export interface DocumentTypeDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface DocumentTypeFormDTO extends DocumentTypeDTO {}

export interface DocumentTypeFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

