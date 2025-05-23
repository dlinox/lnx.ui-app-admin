import type { RecognitionFormDTO } from "@/app/modules/Recognition/types/Recognition.types";

export const _getFormInitValues = (): RecognitionFormDTO => {
  return {
    id: null,
    moduleId: null,
    studentId: null,
    courseId: null, //enrrolmentGroupId
    courseRecognitionId: null,
    observation: null,
  };
};

export const _getFormRules = () => {
  return {
    moduleId: [{ type: "number", required: true, message: "Obligatório" }],
    studentId: [{ type: "number", required: true, message: "Obligatório" }],
    courseId: [{ type: "number", required: true, message: "Obligatório" }], //enrrolmentGroupId
    courseRecognitionId: [
      { type: "number", required: true, message: "Obligatório" },
    ],
    observation: [],
  };
};
