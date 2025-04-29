export interface EnrollmentModuleFormDTO {
  studentId: number | null;
  curriculumId: number | null;
  moduleId: number | null;
  courseId: number | null;
  groupId: number | null;
  payments: string[];
}
