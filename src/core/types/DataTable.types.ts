interface DataTableRequestDTO {
  page: number;
  pageSize: number;
  search: string | null;
  filters?: Record<string, any>;
  sortBy?: any[];
  groupBy?: string;
}

interface DataTableResponseDTO<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  per_page: number;
  last_page: number;
  to: number;
  total: number;
}

interface DataTableHeaderDTO {
  key?: string;
  value?: string;
  title?: string;
  fixed?: boolean;
  align?: "start" | "end" | "center";
  width?: number | string;
  minWidth?: string;
  maxWidth?: string;
  nowrap?: boolean;
  headerProps?: Record<string, any>;
  cellProps?: Record<string, any> | ((data: any) => Record<string, any>);
  sortable?: boolean;
  sort?: (a: any, b: any) => number;
  sortRaw?: (a: any, b: any) => number;
  filter?: (value: any, search: any) => boolean;
  mobile?: boolean;
  children?: DataTableHeaderDTO[];
}

export interface DataTablePaginationDTO {
  page: number;
  total: number;
  pageSize: number;
  pageCount: number;
}

export const initValuesDataTablePagination = (): DataTablePaginationDTO => ({
  page: 1,
  total: 0,
  pageSize: 10,
  pageCount: 0,
});

const initValuesDataTableResponse = (): DataTableResponseDTO<any> => ({
  current_page: 0,
  first_page_url: "",
  per_page: 0,
  to: 0,
  from: 0,
  last_page: 0,
  data: [],
  total: 0,
});

export {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  type DataTableHeaderDTO,
  initValuesDataTableResponse,
};
