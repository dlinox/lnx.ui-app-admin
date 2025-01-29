export interface PaymentTypeDTO {
  id: number | null;
  name: string | null;
  isEnabled: boolean;
}

export interface PaymentTypeFormDTO extends PaymentTypeDTO {}

export interface PaymentTypeFormErrorsDTO {
  name: string | null;
  isEnabled: string | null;
}

