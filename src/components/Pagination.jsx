const Pagination = ({page, setPage}) => (
  <div className="pagination">
    <button
      type="button"
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      Prev
    </button>
    <span>Page {page}</span>
    <button type="button" onClick={() => setPage(page + 1)}>
      Next
    </button>
  </div>
)

export default Pagination
