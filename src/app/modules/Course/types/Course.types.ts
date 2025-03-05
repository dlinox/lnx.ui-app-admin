/*
  'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'hoursPractice' => $this->hours_practice,
            'hoursTheory' => $this->hours_theory,
            'credits' => $this->credits,
            'area' => $this->area,
            'module' => $this->module,
            'curriculum' => $this->curriculum,
            'preRequisite' => $this->pre_requisite,
            'description' => $this->description,
            'isEnabled' => $this->is_enabled,
*/
export interface CourseDTO {
  id: number | null;
  name: string | null;
  order: number | null;
  code: string | null;
  hoursPractice: number | null;
  hoursTheory: number | null;
  credits: number | null;
  area: string | null;
  module: string | null;
  curriculum: string | null;
  preRequisite: string | null;
  description: string | null;
  isEnabled: boolean;
}

export interface CourseFormDTO {
  id: number | null;
  name: string | null;
  order: number | null;
  description: string | null;
  code: string | null;
  hoursPractice: number | null;
  hoursTheory: number | null;
  credits: number | null;
  areaId: number | null;
  moduleId: number | null;
  curriculumId: number | null;
  units: number | null;
  preRequisiteId: number | null;
  isEnabled: boolean;
}

export interface CourseFormErrorsDTO {
  name: string | null;
  description: string | null;
  code: string | null;
  order: string | null;
  hoursPractice: string | null;
  hoursTheory: string | null;
  credits: string | null;
  areaId: string | null;
  moduleId: string | null;
  curriculumId: string | null;
  preRequisiteId: string | null;
  units: string | null;
  isEnabled: string | null;
}
