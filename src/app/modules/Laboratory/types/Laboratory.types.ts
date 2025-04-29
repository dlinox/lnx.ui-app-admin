export interface LaboratoryDTO {
  id: number | null;
  name: string | null;
  type: string | null;
  virtualLink: string | null;
  isEnabled: boolean;
}

export interface LaboratoryFormDTO extends LaboratoryDTO {}

export interface LaboratoryFormErrorsDTO {
  name: string | null;
  type: string | null;
  virtualLink: string | null;
  isEnabled: string | null;
}
