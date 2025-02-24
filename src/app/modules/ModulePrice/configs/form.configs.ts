import type { ModulePriceDataTableItemDTO } from "../types/ModulePrice.types";

export const _getPriceInitValues = (): ModulePriceDataTableItemDTO => {
  return {
    id: null,
    curriculumId: null,
    moduleId: null,
    studentTypeId: null,
    price: 0,
    isEnabled: true,
  };
};

export const _getPriceRules = () => {
  return {
    moduleId: [{ required: true, message: "Obligatório" }],
    studentTypeId: [{ required: true, message: "Obligatório" }],
    price: [{ required: true, message: "Obligatório" }],
  };
};
