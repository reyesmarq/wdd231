export function Pagination(args) {
  const limit = args.limit ?? 20;
  const total = args.total ?? 0;
  const currentPage = args.page ?? 1;
  const totalPages = Math.ceil(total / limit);
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  // Generate page numbers to display
  const pageNumbers = [];
  const startPage = Math.max(1, currentPage - 4);
  const endPage = Math.min(totalPages, currentPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const searchParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const queryFromUrl = searchParams.get('query');
  const queryFromLocalStorage = localStorage.getItem('queryParam');

  // TODO: Need to refactor this and find out a better way of handle this
  // Need to change page on the same query
  if (queryFromUrl === queryFromLocalStorage) {
    return `
      <div class="pagination">
        ${previousPage ? `<a href="#characters?query=${queryFromUrl}&page=${previousPage}" class="pagination-button">&laquo; Prev</a>` : `<span class="pagination-button disabled">&laquo; Prev</span>`}
        ${startPage > 1 ? `<a href="#characters?query=${queryFromUrl}&page=1" class="pagination-button">1</a><span class="pagination-ellipsis">...</span>` : ''}
        ${pageNumbers.map((page) => `<a href="#characters?query=${queryFromUrl}&page=${page}" class="pagination-button ${page === currentPage ? 'active' : ''}">${page}</a>`).join('')}
        ${endPage < totalPages ? `<span class="pagination-ellipsis">...</span><a href="#characters?query=${queryFromUrl}&page=${totalPages}" class="pagination-button">${totalPages}</a>` : ''}
        ${nextPage ? `<a href="#characters?query=${queryFromUrl}&page=${nextPage}" class="pagination-button">Next &raquo;</a>` : `<span class="pagination-button disabled">Next< &raquo;/span>`}
      </div>
    `;
  }

  return `
    <div class="pagination">
      ${previousPage ? `<a href="#characters?page=${previousPage}" class="pagination-button">&laquo; Prev</a>` : `<span class="pagination-button disabled">&laquo; Prev</span>`}
      ${startPage > 1 ? `<a href="#characters?page=1" class="pagination-button">1</a><span class="pagination-ellipsis">...</span>` : ''}
      ${pageNumbers.map((page) => `<a href="#characters?page=${page}" class="pagination-button ${page === currentPage ? 'active' : ''}">${page}</a>`).join('')}
      ${endPage < totalPages ? `<span class="pagination-ellipsis">...</span><a href="#characters?page=${totalPages}" class="pagination-button">${totalPages}</a>` : ''}
      ${nextPage ? `<a href="#characters?page=${nextPage}" class="pagination-button">Next &raquo;</a>` : `<span class="pagination-button disabled">Next< &raquo;/span>`}
    </div>
  `;
}
