import { useHttp } from "@/core/composables/useHttp";
import type {
  PaymentFormDTO,
  PaymentResponseDTO,
} from "../types/Payment.types";

const http = useHttp();
export const _validatePayment = async (
  request: PaymentFormDTO
): Promise<PaymentResponseDTO> => {
  try {
    const auxForm: any = { ...request };
    if (auxForm.paymentFile) {
      auxForm.paymentFile = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(auxForm.paymentFile);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    }

    let reponse = await http.post(`/payment/validate`, auxForm);
    return reponse.data.data as PaymentResponseDTO;
  } catch (error: any) {
    return { token: null, amount: 0 };
  }
};
