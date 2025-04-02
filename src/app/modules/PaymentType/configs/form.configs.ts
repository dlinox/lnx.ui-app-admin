import type { PaymentTypeFormDTO } from "@/app/modules/PaymentType/types/PaymentType.types";

export const _getPaymentTypeInitValues = (): PaymentTypeFormDTO => {
  return {
    id: null,
    name: null,
    isEnabled: true,
  };
};

export const _getPaymentTypeRules = () => {
  return {
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
