import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="flex justify-between  content-center items-center container mx-auto">
      <p>Pagina: 1</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Button
      </button>
    </header>
  );
}

function characterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setLoading(false);
      setCharacters(results);
      console.log(characters);
    }
    fetchData();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <NavPage/>
      {loading ? (
        <div className="grid grid-cols-3 gap-3">Loading</div>
      ) : (
        <div className="grid grid-cols-3 gap-3 container mx-auto">
          {characters.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        </div>
      )}
    </div>
  );
}

export default characterList;
