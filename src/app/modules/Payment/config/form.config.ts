import type { PaymentFormDTO } from "@/app/modules/Payment/types/Payment.types";

/*
  studentId: number | null;
  amount: number | null;
  date: string | null;
  sequenceNumber: string | null;
  paymentTypeId: number;
  token: string | null;
*/
export const _getFormInitValues = (): PaymentFormDTO => {
  return {
    studentId: null,
    amount: null,
    date: null,
    sequenceNumber: null,
    paymentTypeId: 7,
  };
};

export const _getFormRules = (typeId: number) => {
  // 7 BN - VENTANILLA  sequenceNumber len 7
  // 9 BN - PAGALO PE sequenceNumber len 6
  return {
    studentId: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    amount: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      //debe se un numero
      {
        message: "Debe ser un número",
        trigger: ["blur", "input"],
        validator: (_rule: any, value: any) => {
          if (!value) {
            return new Error("Obligatorio");
          } else if (!/^\d*\.?\d*$/.test(value)) {
            return new Error("Debe ser un número");
          }
          return true;
        },
      },
    ],
    date: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
    sequenceNumber: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
      {
        message: typeId === 7 ? "Debe tener 7 digitos" : "Debe tener 6 digitos",
        trigger: ["blur", "input"],
        validator: (_rule: any, value: any) => {
          if (!value) {
            return new Error("Obligatorio");
          } else if (!/^\d*$/.test(value)) {
            return new Error("Debe ser un número");
          } else if (typeId === 7 && value.length !== 7) {
            return new Error("Debe tener 7 digitos");
          } else if (typeId === 9 && value.length !== 6) {
            return new Error("Debe tener 6 digitos");
          }
          return true;
        },
      },
    ],
    paymentTypeId: [
      {
        type: "number",
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
