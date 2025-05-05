/*
     'id' => $this->id,
            'group' => $this->group,
            'course' => $this->course,
            'teacher' => $this->teacher,
            'period' => $this->period,
            'observations' => $this->observations,
            'createdAt' => $this->created_at,
*/
export interface AcademicRecordDTO {
  id: number | null;
  group: string | null;
  course: string | null;
  teacher: string | null;
  period: string | null;
  observations: string | null;
  createdAt: string | null;
}

// export interface AcademicRecordFormDTO {
//   id: number | null;
//   groupId: number | null;
//   observations: string | null;
// }

// export interface AcademicRecordFormErrorsDTO {
//   groupId: string | null;
//   observations: string | null;
// }
