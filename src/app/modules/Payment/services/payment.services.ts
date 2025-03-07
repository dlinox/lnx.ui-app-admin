import { http } from "@/core/http";
import type {
  PaymentFormDTO,
  PaymentResponseDTO,
} from "../types/Payment.types";

export const _validatePayment = async (
  request: PaymentFormDTO
): Promise<PaymentResponseDTO> => {
  try {
    let reponse = await http().post(`/payment/validate`, request);
    return reponse.data.data as PaymentResponseDTO;
  } catch (error: any) {
    return { token: null };
  }
};
