function FilmCard({ film }) {
  return (
    <div className="film-card">
      <img src={film.image} alt={film.title} />
      <h3>{film.title}</h3>
      <p>{film.director}</p>
      <p>{film.release_date}</p>
    </div>
  );
}

export default FilmCard;
