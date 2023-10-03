import React from "react"

const ITEMS_PER_PAGE = 6
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div className='flex'>
      <div className='search'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <ul className='grid-container'>
          {filteredData
            .slice(
              (currentPage - 1) * ITEMS_PER_PAGE,
              currentPage * ITEMS_PER_PAGE
            )
            .map((item) => (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <div className='title'>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div className='year'>
                    <p>{item.year}</p>
                  </div>
                </div>
                <div className='subtags'>
                  <div>
                    <p>{item.capacity}</p>
                  </div>
                  <div>
                    <p>{item.type}</p>
                  </div>
                  <div>
                    <p>{item.fuelType}</p>
                  </div>
                  <div>
                    <p>{item.transmission}</p>
                  </div>
                </div>
                <div className='price'>
                  <div>
                    <h3>{item.price}</h3>
                  </div>
                  <div className='buy'>
                    <button>Buy Now</button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='shift-button'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Page
