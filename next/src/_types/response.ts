export interface PageResponse<T = any> {
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
