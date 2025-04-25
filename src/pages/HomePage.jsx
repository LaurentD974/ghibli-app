import Film from "./Film";

function HomePage({ films, setFilms }) {
  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {films
          .sort((u1, u2) => u1.name.last.localeCompare(u2.name.last))
          .map((u, index) => (
            <Film
              key={index}
              user={u}
              i={index}
              films={films}
              setFilms={setFilms}
            />
          ))}
      </ul>
      <button onClick={() => setFilms([])}>Reset Film</button>
    </>
  );
}

export default HomePage;
