import type { PaymentTypeFormDTO } from "@/app/modules/PaymentType/types/PaymentType.types";

export const _getPaymentTypeInitValues = (): PaymentTypeFormDTO => {
  return {
    id: null,
    name: null,
    commission: 0,
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
    commission: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
