export interface CoursePriceDTO {
  id: number | null;
  curriculumId: number | null;
  courseId: number | null;
  studentTypeId: number | null;
  presentialPrice: number | null;
  virtualPrice: number | null;
  isEnabled: boolean;
}

export interface CoursePriceDataTableItemDTO {
  id: number | null;
  curriculum?: string;
  curriculumId: number | null;
  courseId: number | null;
  course?: string;
  studentTypeId: number | null;
  studentType?: string;
  presentialPrice: number;
  virtualPrice: number;
  isEnabled: boolean;
}

export interface CoursePriceDataTablePropsDTO {
  curriculumId: number;
}

export interface CoursePriceFormDTO {
  id: number | null;
  curriculumId: number | null;
  courseId: number | null;
  studentTypeId: number | null;
  presentialPrice: number | null;
  virtualPrice: number | null;
  isEnabled: boolean;
}

export interface CoursePriceFormErrorsDTO {
  curriculumId: string | null;
  courseId: string | null;
  studentTypeId: string | null;
  presentialPrice: string | null;
  virtualPrice: string | null;
}
