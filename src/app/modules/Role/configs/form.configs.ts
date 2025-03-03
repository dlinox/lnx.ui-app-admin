import type { RoleFormDTO } from "@/app/modules/Role/types/Role.types";

export const _getRoleInitValues = (level: string): RoleFormDTO => {
  return {
    id: null,
    name: null,
    level: level,
    isEnabled: true,
  };
};

export const _getRoleRules = () => {
  return {
    name: [
      {
        required: true,
        trigger: ["blur", "input"],
        message: "Obligatorio",
      },
    ],
  };
};
