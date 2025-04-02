export interface AuthFormDTO {
  username: string;
  password: string;
}

export interface AuthUserDTO {
  name: string;
  redirectTo: string;
  role: string;
  email: string;
}

export interface AuthDTO {
  token: string;
  user: AuthUserDTO;
  permissions: string;
}

export interface ResetPasswordFormDTO {
  email: string;
}
