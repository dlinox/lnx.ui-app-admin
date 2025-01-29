import type { PersonDTO } from "@/app/modules/Person/types/Person.types";

export interface TeacherDTO extends PersonDTO {
  id: number | null;
  personId: number | null;
  isEnabled: boolean;
}

export interface TeacherDataTableItemDTO {
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
  TeacherType: string | null;
  isEnabled: boolean;
}

export interface TeacherFormDTO extends TeacherDTO {}

export interface TeacherFormErrorsDTO {
  code: string | null;
  documentType: string | null;
  documentNumber: string | null;
  name: string | null;
  lastNameFather: string | null;
  lastNameMother: string | null;
  gender: number | null;
  email: string | null;
  phone: string | null;
  TeacherType: string | null;
}
