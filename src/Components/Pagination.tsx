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
  const lastPage = Math.ceil(totalPosts / postPerPage)

  for (let i = 1; i <= lastPage; i++) {
    pages.push(i)
  }

  const renderPaginationButtons = pages.map((page, i) => {
    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
      return (
        <button
          key={i}
          onClick={() => handleButtonClick(page)}
          className={`${page === currentPage ? 'text-chocolate bg-transparent' : ''}hover:text-brown transition-all duration-500 border rounded-md p-1`}>{page}</button>
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)

    if (isNaN(value)) {
      setCurrentPage(1)
    }

    if (value >= lastPage) {
      setCurrentPage(lastPage)
    }

    if (value <= 0) {
      setCurrentPage(1)
    }

    setCurrentPage(value)
  }

  return (
    <div className="text-white flex flex-col items-center justify-center gap-4 my-6">
      <div className=" flex items-center justify-center gap-3 ">

        <button
          onClick={() => handlePrevClick()}
          className={`${currentPage === 1 ? 'opacity-40' : 'opacity-100'}`}
          disabled={currentPage === 1}
        >{"<<<"}</button>
        
        <div className="flex gap-2">{renderPaginationButtons}</div>
        
        <button
          onClick={() => handleNextClick()}
          className={`${currentPage === lastPage ? 'opacity-40' : 'opacity-100'}`}
          disabled={currentPage === lastPage}
        >{">>>"}</button>

      </div>

      <div>
        <input type="text" value={currentPage} onChange={handleInputChange} className="w-10 h-auto p-1 text-center rounded-lg bg-transparent border border-gray-dark hover:border-brown focus:border-saddle-brown focus:outline-0 transition-all duration-300" /> / <span>{lastPage}</span>
      </div>
    </div>
  )
}

export default Pagination