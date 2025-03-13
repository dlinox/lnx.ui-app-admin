export interface PaymentTypeDTO {
  id: number | null;
  name: string | null;
  commission: number | null;
  isEnabled: boolean;
}

export interface PaymentTypeFormDTO extends PaymentTypeDTO {}

export interface PaymentTypeFormErrorsDTO {
  name: string | null;
  commission: string | null;
  isEnabled: string | null;
}

