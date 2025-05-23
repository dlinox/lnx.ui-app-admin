export interface RecognitionDTO {
  id: string;
  module: string;
  student: string;
  course: string;
  courseRecognition: string;
  observation: string | null;
  createdAt: Date;
}

export interface RecognitionFormDTO {
  id: number | null;
  moduleId: number | null;
  studentId: number | null;
  courseId: number | null; //enrrolmentGroupId
  courseRecognitionId: number | null;
  observation: string | null;
}

export interface RecognitionFormErrorsDTO {
  moduleId: string | number | null;
  studentId: string | number | null;
  courseId: string | number | null; //enrrolmentGroupId
  courseRecognitionId: string | number | null;
  observation: string | null;
}
