export default function FeaturedProjectsCarousel({ children }) {
  return (
    <div className="featured-carousel" role="region" aria-roledescription="carousel">
      <div className="featured-track">
        {children}
      </div>
    </div>
  )
}
