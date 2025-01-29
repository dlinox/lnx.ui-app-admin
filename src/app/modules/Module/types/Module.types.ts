export interface ModuleDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface ModuleFormDTO extends ModuleDTO {}

export interface ModuleFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

