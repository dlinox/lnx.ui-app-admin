export const CURRICULUM_STATUS_CONST = [
  { value: "BORRADOR", label: "BORRADOR" },
  { value: "VIGENTE", label: "VIGENTE" },
  { value: "OBSOLETO", label: "OBSOLETO" },
] as const;

export const PERIOD_STATUS_CONST = [
  { value: "PENDIENTE", label: "PENDIENTE" }, //periodo en proceso de creacion
  { value: "MATRICULA", label: "MATRICULA" }, //periodo con matricula completa
  { value: "EN CURSO", label: "EN CURSO" }, //periodo en curso
  { value: "FINALIZADO", label: "FINALIZADO" }, //periodo finalizado
  { value: "CANCELADO", label: "CANCELADO" }, //periodo cancelado
] as const;

export const GROUP_STATUS_CONST = [
  { value: "ABIERTO", label: "ABIERTO" }, //curso en proceso de matricula
  { value: "CERRADO", label: "CERRADO" }, //curso con matricula completa
  { value: "CANCELADO", label: "CANCELADO" }, //curso cancelado
  { value: "FINALIZADO", label: "FINALIZADO" }, //curso finalizado //cuando se emite la nota final del curso
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
