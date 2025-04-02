export interface ChangePasswordFormDTO {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ChangePasswordFormErrorDTO {
  password: string | null;
  newPassword: string | null;
  confirmPassword: string | null;
}
