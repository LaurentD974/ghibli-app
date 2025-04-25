import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FilmList from "./components/FilmList";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);

  // Fonction pour récupérer les films
  const getFilms = async () => {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();
    setFilms(data);
  };

  // Charger les films au démarrage
  useEffect(() => {
    getFilms();
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
