import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  console.log(character)

  return (
    <div>
      <input type="search" value={character} onChange={handleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
};

export default SearchBar;
