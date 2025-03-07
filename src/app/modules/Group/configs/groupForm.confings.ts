import type { GroupFormDTO } from "@/app/modules/Group/types/Group.types";

export const _getGroupInitValues = (): GroupFormDTO => {
  return {
    id: null,
    name: null,
    courseId: null,
    teacherId: null,
    laboratoryId: null,
    schedules: [],
    maxStudents: 0,
    minStudents: 0,
    modality: null,
    status: "ABIERTO",
  };
};
