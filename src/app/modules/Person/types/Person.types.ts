export interface PersonDTO {
  code: string | null;
  documentTypeId: number | null;
  documentNumber: string | null;
  name: string | null;
  lastNameFather: string | null;
  lastNameMother: string | null;
  gender: number | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  dateOfBirth?: string | null;
  locationId?: number | null;
  countryId?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
