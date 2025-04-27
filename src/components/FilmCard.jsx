function FilmCard({ image, title, director, releaseDate }) {
  return (
    <div className="film-card">
      <img src={image} alt={title} className="film-image" />
      <h3 className="film-title">{title}</h3>
      <p className="film-director"> Réalisation : {director}</p>
      <p className="film-release-date">Sortie en : {releaseDate}</p>
    </div>
  );
}

export default FilmCard;
