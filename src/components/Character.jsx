function Character({character}) {
  return (
    <div className="justify-items-center grid">
      <p className="text-lg p-3">{character.name}</p>
      <img className="rounded-full max-w-full h-auto" src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
