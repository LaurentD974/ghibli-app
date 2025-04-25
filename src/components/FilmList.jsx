import FilmCard from "./FilmCard";

function FilmList({ films }) {
  return (
    <div className="film-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;
