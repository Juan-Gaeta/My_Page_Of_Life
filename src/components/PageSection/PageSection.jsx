import './PageSection.css'

function PageSection({ id, title, subtitle, children }) {
  return (
    <section className="page-section" id={id}>
      <div className="page-section-header">
        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>

      <div className="page-section-content">
        {children}
      </div>
    </section>
  )
}

export default PageSection
