import type { ItemSelectDTO } from "@/core/types/Select.types";

export const MODALITIES: ItemSelectDTO[] = [
  {
    label: "PRESENCIAL",
    value: "PRESENCIAL",
  },
  {
    label: "VIRTUAL",
    value: "VIRTUAL",
  },
] as const;
