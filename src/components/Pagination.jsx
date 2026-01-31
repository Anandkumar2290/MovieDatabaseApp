const Pagination = ({page, setPage}) => {
  const onClickNext = () => {
    setPage(prevPage => prevPage + 1)
  }

  const onClickPrev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  return (
    <div className="pagination">
      <button type="button" onClick={onClickPrev}>
        Prev
      </button>
      <p>{page}</p>

      <button type="button" onClick={onClickNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination
