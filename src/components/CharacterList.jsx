import { useState, useEffect } from "react";
function characterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://rickandmortyapi.com/api/character`);
      const { results } = await data.json();
      setCharacters(results);
      console.log(characters);
    }
    fetchData();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
}

export default characterList;
