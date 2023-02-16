import './Paginate.css'

type Props = {
  slug: string
  currentPage: number
  lastPage: number
  prev: string
  next: string
}

const Paginate = ({ slug, currentPage, lastPage, prev, next }: Props) => {
  let pages = []

  for (let i = 1; i <= lastPage; i++) {
    pages.push(i)
  }

  return (
    <div className="Paginate">
      {prev && (
        <a href={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
      )}
      {pages.map((page, key) => (
        <a
          className={`Paginate__link ${
            page === currentPage ? 'Paginate__link--focus' : ''
          }`}
          href={`${slug}/${page === 1 ? '' : page}`}
          key={key}
        >
          {page}
        </a>
      ))}
      {next && (
        <a href={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      )}
    </div>
  )
}

export default Paginate
