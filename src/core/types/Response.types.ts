export interface ResponseServiceDTO<T> {
  status: boolean;
  data: T | null;
}
