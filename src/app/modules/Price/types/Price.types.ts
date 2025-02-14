export interface PriceDTO {
  id: number | null;
  curriculumId: number | null;
  moduleId: number | null;
  studentTypeId: number | null;
  enrollmentPrice: number | null;
  presentialPrice: number | null;
  virtualPrice: number | null;
  isEnabled: boolean;
}

export interface PriceDataTableItemDTO {
  id: number | null;
  curriculum?: string;
  curriculumId: number | null;
  moduleId: number | null;
  module?: string;
  studentTypeId: number | null;
  studentType?: string;
  enrollmentPrice: number;
  presentialPrice: number;
  virtualPrice: number;
  isEnabled: boolean;
}

export interface PriceDataTablePropsDTO {
  curriculumId: number;
}

export interface PriceFormDTO {
  id: number | null;
  curriculumId: number | null;
  moduleId: number | null;
  studentTypeId: number | null;
  enrollmentPrice: number | null;
  presentialPrice: number | null;
  virtualPrice: number | null;
  isEnabled: boolean;
}

export interface PriceFormErrorsDTO {
  curriculumId: string | null;
  moduleId: string | null;
  studentTypeId: string | null;
  enrollmentPrice: string | null;
  presentialPrice: string | null;
  virtualPrice: string | null;
}
