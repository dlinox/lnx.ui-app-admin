import type { DocumentTypeFormDTO } from "@/app/modules/DocumentType/types/DocumentType.types";

export const _getDocumentTypeInitValues = (): DocumentTypeFormDTO => {
  return {
    id: null,
    name: null,
    isEnabled: true,
  };
};

export const _getDocumentTypeRules = () => {
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
