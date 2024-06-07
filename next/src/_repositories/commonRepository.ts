export type PaginationType = {
  current_page: number,
  data: any[],
  from: number,
  last_page: number,
  per_page: number,
  to: number,
  total: number
}

export default {
  /**
   * 配列をページネーションデータに変換する
   * @param data
   * @param perPage
   * @param pageNum
   */
  pagination(data: any[], perPage: number = 10, pageNum: number = 1) {

    const currentPage = pageNum <= 0 ? 1 : pageNum

    return {
      current_page: currentPage,
      data: data.slice(perPage * (currentPage - 1), perPage * currentPage + 1),
      from: perPage * (currentPage - 1) + 1,
      last_page: data.length % perPage === 0 ? data.length / perPage : Math.floor(data.length / perPage) + 1,
      per_page: perPage,
      to: perPage * currentPage,
      total: data.length
    } as PaginationType
  }
}