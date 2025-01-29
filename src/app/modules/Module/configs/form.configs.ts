import type { ModuleFormDTO } from "@/app/modules/Module/types/Module.types";

export const _getModuleInitValues = (): ModuleFormDTO => {
  return {
    id: null,
    name: null,
    isEnabled: true,
  };
};

export const _getModuleRules = () => {
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
