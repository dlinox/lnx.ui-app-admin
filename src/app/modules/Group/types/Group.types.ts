export interface ScheduleDTO {
  day: string;
  startHour: number | null;
  endHour: number | null;
}

export interface GroupDTO {
  id: number | null;
  name: string | null;
  course: string | null;
  isEnabled: boolean;
}

export interface GroupDataTableItemDTO {
  id: number;
  code: string;
  name: string;
  course: string;
  countGroups: number;
  module: string;
  area: string;
  isEnabled: boolean;
}

export interface GroupDataTablePropsDTO {
  periodId: number;
  curriculumId: number;
}

export interface GroupFormDTO {
  id: number | null;
  name: string | null;
  courseId: number | null;
  teacherId: number | null;
  laboratoryId: number | null;
  schedules: ScheduleDTO[] | [];
  modality: string | null;
  maxStudents: number;
  minStudents: number;
  status: string | null;
}

export interface GroupFormErrorsDTO {
  name: string[];
  courseId: string[];
  teacherId: string[];
  laboratoryId: string[];
  schedules: string[];
  maxStudents: number;
  minStudents: number;
  modality: string[];
}

export interface GroupRequestLoadFormDTO {
  id: number; //CurriculumCourseId
  periodId: number;
}
