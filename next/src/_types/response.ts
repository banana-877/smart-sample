export interface ResponseWithMeta<T = any> {
  status_code: number;
  data: T[]
  meta: {
    last_page: number;
  };
}

export interface ResponseWithPagination<T = any> {
  status_code: number
  data: {
    current_page: number
    data: T[]
    from: number
    last_page: number
    per_page: number
    to: number
    total: number
  }
}

export interface Response<T = any> {
  status_code: number;
  data: T[]
}
