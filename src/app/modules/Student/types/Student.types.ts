import type { PersonDTO } from "@/app/modules/Person/types/Person.types";

export interface StudentDTO extends PersonDTO {
  id: number | null;
  personId: number | null;
  studentTypeId: number | null;
  isEnabled: boolean;
}

export interface StudentDataTableItemDTO {
  id: number;
  code: string;
  documentType: string | null;
  documentNumber: string | null;
  name: string;
  lastNameFather: string | null;
  lastNameMother: string | null;
  gender: number | null;
  email: string | null;
  phone: string | null;
  studentType: string | null;
  isEnabled: boolean;
}

export interface StudentFormDTO extends StudentDTO {}

export interface StudentFormErrorsDTO {
  code: string | null;
  documentType: string | null;
  documentNumber: string | null;
  name: string | null;
  lastNameFather: string | null;
  lastNameMother: string | null;
  gender: number | null;
  email: string | null;
  phone: string | null;
  studentType: string | null;
}

export interface StudentListItemDTO {
  id: number;
  name: string;
  documentType: string;
  documentNumber: string;
  lastName: string;
  studentType: string;
  isEnabled: boolean;
}


export interface StudentSearchListRequestDTO {
  code: string | null;
  documentNumber: string;
  name: string;
  lastNameFather: string;
  lastNameMother: string;
}
