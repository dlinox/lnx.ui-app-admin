export interface UserDTO {
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  password?: string | null;
  role: string | null;
  level: string | null;
  modelId: number | null;
  isEnabled: boolean;
}

export interface UserFormDTO extends UserDTO {}

export interface UserFormErrorsDTO {
  name: string | null;
  username: string | null;
  email: string | null;
  password: string | null;
  role: string | null;
  isEnabled: string | null;
  modelId: string | null;
}
