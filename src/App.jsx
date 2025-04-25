import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import './App.css';

function App() {
const [films, setFilms] = useState([]);

// Fonction pour récupérer les films (à compléter)
const getFilms = async () => {
// Votre code ici
};

// useEffect pour charger les films au démarrage (à compléter)
useEffect(() => {
// Votre code ici
}, []);

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
