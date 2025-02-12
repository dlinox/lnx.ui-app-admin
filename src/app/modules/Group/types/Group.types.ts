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
  curriculumCourseId: number | null;
  teacherId: number | null;
  laboratoryId: number | null;
  schedules: ScheduleDTO[] | [];
  modality: string | null;
  isEnabled: boolean;
}

export interface GroupFormErrorsDTO {
  name: string[];
  curriculumCourseId: string[];
  teacherId: string[];
  laboratoryId: string[];
  schedules: string[];
  modality: string[];
}

export interface GroupRequestLoadFormDTO {
  id: number; //CurriculumCourseId
  periodId: number;
}
