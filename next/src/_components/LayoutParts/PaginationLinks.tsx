"use client"
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { filterEmptyStringValues } from '@/_utils/dataUtils';

export default function PaginationLinks ({
  pagination,
  params
}: {
  pagination: PaginationProps,
  params: any
}) {
  const linkClassName = "text-blue1 leading-4 hv-bg-blue3 border-2 rounded-full bd-blue3 w-11 h-11 bg-no-repeat bg-center bg-50% flex justify-center items-center"

  const firstPage = 1
  const lastPage = pagination.last_page
  const currentPage = Number(useSearchParams().get('page') ?? firstPage)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const prevVisibility = currentPage > firstPage ? '' : 'invisible'
  const nextVisibility = currentPage < lastPage ? '' : 'invisible'

  return(
    <>
      <div className="flex flex-wrap justify-center pb-2">
        <div className="grid grid-cols-5 place-items-center gap-x-1">
          <Link
            className={`${linkClassName} ${prevVisibility} bg-first`}
            href={{query: filterEmptyStringValues({...params, page: firstPage})}}
          />
          <Link
            className={`${linkClassName} ${prevVisibility} bg-prev`}
            href={{query: filterEmptyStringValues({...params, page: prevPage})}}
          />
          <Link
            className={linkClassName}
            href={{query: filterEmptyStringValues({...params, page: currentPage})}}
          >
            {currentPage}
          </Link>
          <Link
            className={`${linkClassName} ${nextVisibility} bg-next`}
            href={{query: filterEmptyStringValues({...params, page: nextPage})}}
          />
          <Link
            className={`${linkClassName} ${nextVisibility} bg-last`}
            href={{query: filterEmptyStringValues({...params, page: lastPage})}}
          />
        </div>
      </div>
      <div className="flex flex-wrap pb-10">
        <p className="w-full text-center text-dark-gray1">
          <span className="font-bold">{currentPage}</span> / {lastPage}
        </p>
        <p className="w-full text-center text-dark-gray1">
          （全<span className="font-bold">{pagination.total}</span>件）
        </p>
      </div>
    </>
  )
}

export interface PaginationProps {
  last_page: number
  total: number
}
