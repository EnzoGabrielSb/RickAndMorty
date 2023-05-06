import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  console.log(character);

  return (
    <div>
      <div>
        <Link to={"/about"}>
          <p>About Me</p>
        </Link>
        <Link to={"/home"}>
          <p>Home</p>
        </Link>
        <Link to={"/favorites"}>
          <p>Favorites🌟</p>
        </Link>
      </div>
      <div>
        <input type="search" value={character} onChange={handleChange} />
        <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
    </div>
  );
};

export default SearchBar;
