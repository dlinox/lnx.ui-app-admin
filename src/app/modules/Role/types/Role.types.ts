export interface RoleDTO {
  id: number | null;
  name: string | null;
  level: string | null;
  isEnabled: boolean;
}

export interface RoleFormDTO extends RoleDTO {}

export interface RoleFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}
