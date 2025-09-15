import markerIcon from "../assets/marker.png"

export default function Entry(props) {
  console.log(props)

  return (
    <article className="journal-entry">
      <div className="journal-entry-image-container">
        <img
          className="journal-entry-image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="journal-entry-info">
        <img
          src={markerIcon}
          alt="Marker icon"
          className="marker"
        />
        <span className="journal-entry-country">{props.country}</span>
        <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  )
}