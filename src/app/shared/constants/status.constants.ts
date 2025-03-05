export const CURRICULUM_STATUS_CONST = [
  { value: "BORRADOR", label: "BORRADOR" },
  { value: "VIGENTE", label: "VIGENTE" },
  { value: "OBSOLETO", label: "OBSOLETO" },
] as const;

export const PERIOD_STATUS_CONST = [
  { value: "PENDIENTE", label: "PENDIENTE" },
  { value: "MATRICULA", label: "MATRICULA" },
  { value: "EN CURSO", label: "EN CURSO" },
  { value: "FINALIZADO", label: "FINALIZADO" },
  { value: "CANCELADO", label: "CANCELADO" },
] as const;

export const GROUP_STATUS_CONST = [
  { value: "ABIERTO", label: "ABIERTO" },
  { value: "CERRADO", label: "CERRADO" },
  { value: "CANCELADO", label: "CANCELADO" },
] as const;

export const COURSE_MODALITIES_CONST = [
  { value: "PRESENCIAL", label: "PRESENCIAL" },
  { value: "VIRTUAL", label: "VIRTUAL" },
] as const;

export const ENROLLMENT_STATUS_CONST = [
  { value: "PENDIENTE", label: "PENDIENTE" },
  { value: "MATRICULADO", label: "MATRICULADO" },
  { value: "RESERVA", label: "RESERVA" },
  { value: "RETIRADO", label: "RETIRADO" },
  { value: "EXPULSADO", label: "EXPULSADO" },
  { value: "CANCELADO", label: "CANCELADO" },
] as const;
