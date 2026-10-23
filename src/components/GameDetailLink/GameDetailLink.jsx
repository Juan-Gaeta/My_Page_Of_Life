import { Link, useNavigate } from 'react-router-dom'

function GameDetailLink({ slug, source, className, label, children }) {
  const navigate = useNavigate()
  const detailPath = `/videojuegos/${slug}`

  function handleClick(event) {
    if (
      event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigate(detailPath, {
      state: {
        returnScrollY: window.scrollY,
        returnFocusId: event.currentTarget.id,
      },
    })
  }

  return (
    <Link
      id={`detail-${source}-${slug}`}
      className={className}
      aria-label={label}
      to={detailPath}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

export default GameDetailLink
