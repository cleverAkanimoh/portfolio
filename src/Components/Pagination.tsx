import { useState } from "react"

type PaginationProps = {
  totalPosts: number
  postPerPage: number
  setCurrentPage: any
  currentPage: number
  pageNumberLimitValue: number
  maxPageNumberLimitValue: number
  minPageNumberLimitValue: number
}

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
  pageNumberLimitValue,
  maxPageNumberLimitValue,
  minPageNumberLimitValue }: PaginationProps) => {

  const pageNumberLimit = pageNumberLimitValue
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(maxPageNumberLimitValue)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(minPageNumberLimitValue)

  let pages: any[] = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i)
  }

  const renderPaginationButtons = pages.map((page, index) => {
    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
      return (
        <button
          key={index}
          onClick={() => handleButtonClick(page)}
          className={`${page === currentPage ? 'text-chocolate bg-transparent' : ''}hover:text-chocolate transition-all duration-500 border mx-[0.4rem] p-1`} >{page}</button>
      )
    }
  })

  function handleButtonClick(page: any) {
    setCurrentPage(page)
  }

  function handlePrevClick() {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  function handleNextClick() {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  return (
    <div className="text-white h-16 flex items-center justify-center my-5">
      <button
        onClick={() => handlePrevClick()}
        className={`${currentPage === 1 ? 'hidden' : 'inline'}`}
      >prev</button>
      {renderPaginationButtons}
      <button
        onClick={() => handleNextClick()}
        className={`${currentPage === 10 ? 'hidden' : 'inline'}`}
      >next</button>
    </div>
  )
}

export default Pagination