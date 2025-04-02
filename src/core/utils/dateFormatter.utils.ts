export function formatDate(dateString: string): string {
  const fecha = new Date(dateString);
  return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "long" })
    .format(fecha)
    .replace(" ", " de ");
}
