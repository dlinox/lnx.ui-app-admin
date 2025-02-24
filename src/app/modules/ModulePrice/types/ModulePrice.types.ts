export interface ModulePriceDTO {
  id: number | null;
  curriculumId: number | null;
  moduleId: number | null;
  studentTypeId: number | null;
  price: number | null;
  isEnabled: boolean;
}

export interface ModulePriceDataTableItemDTO {
  id: number | null;
  curriculum?: string;
  curriculumId: number | null;
  moduleId: number | null;
  module?: string;
  studentTypeId: number | null;
  studentType?: string;
  price: number | null;
  isEnabled: boolean;
}

export interface ModulePriceDataTablePropsDTO {
  curriculumId: number;
}

export interface ModulePriceFormDTO {
  id: number | null;
  curriculumId: number | null;
  moduleId: number | null;
  studentTypeId: number | null;
  price: number | null;
  isEnabled: boolean;
}

export interface ModulePriceFormErrorsDTO {
  curriculumId: string | null;
  moduleId: string | null;
  studentTypeId: string | null;
  price: number | null;
}
