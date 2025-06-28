export interface PaymentFormDTO {
  studentId: number | null;
  amount: number | null;
  date: string | null;
  sequenceNumber: string | null;
  paymentTypeId: number;
  paymentFile: File | null;
}

export interface PaymentDTO {
  token: string | null;
  amount: number | null;
  sequenceNumber: string | null;
}

export interface PaymentFormErrorsDTO {
  studentId: string | null;
  amount: string | null;
  date: string | null;
  sequenceNumber: string | null;
  paymentTypeId: string | null;
}

export interface PaymentResponseDTO {
  token: string | null;
}
