export interface EnrollmentGroupFormDTO {
  id: number | null;
  studentId: number | null;
  groupId: number | null;
  payments: string[];
  includeEnrollmentPrice: boolean;
}


