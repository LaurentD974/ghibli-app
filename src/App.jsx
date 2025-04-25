import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';

function App() {
  const url = "https://ghibliapi.vercel.app/films"
const [films, setFilms] = useState([]);

// Fonction pour récupérer les films (à compléter)
const getFilms = async () => {
  const request = await fetch(url);
    const data = await request.json();
    setFilms(data.results);
};

// useEffect pour charger les films au démarrage (à compléter)
useEffect(() => {
  getFilms();
}, []);
console.log(films);

return (
<div className="App">
<Navbar />
<main>
<FilmList films={films} />
</main>
</div>
);
}
export default App;
