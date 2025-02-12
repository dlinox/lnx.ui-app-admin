import type { GroupFormDTO } from "@/app/modules/Group/types/Group.types";

export const _getGroupInitValues = (): GroupFormDTO => {
  return {
    id: null,
    name: null,
    curriculumCourseId: null,
    teacherId: null,
    laboratoryId: null,
    schedules: [],
    modality: null,
    isEnabled: true,
  };
};
