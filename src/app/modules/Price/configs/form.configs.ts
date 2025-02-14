import type { PriceDataTableItemDTO } from "../types/Price.types";

export const _getPriceInitValues = (): PriceDataTableItemDTO => {
  return {
    id: null,
    curriculumId: null,
    moduleId: null,
    studentTypeId: null,
    enrollmentPrice: 0,
    presentialPrice: 0,
    virtualPrice: 0,
    isEnabled: true,
  };
};

export const _getPriceRules = () => {
  return {
    moduleId: [{ required: true, message: "Obligatório" }],
    studentTypeId: [{ required: true, message: "Obligatório" }],
    enrollmentPrice: [{ required: true, message: "Obligatório" }],
    presentialPrice: [],
    virtualPrice: [],
  };
};
