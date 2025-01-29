export interface LaboratoryDTO {
  id: number | null;
  name: string | null;
  deviceCount: number | null;
  deviceDetail: string | null;
  isEnabled: boolean;
}

export interface LaboratoryFormDTO extends LaboratoryDTO {}

export interface LaboratoryFormErrorsDTO {
  name: string | null;
  deviceCount: string | null;
  deviceDetail: string | null;
  isEnabled: string | null;
}
