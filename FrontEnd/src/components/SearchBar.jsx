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
      <nav class="menu">
        <ul>
          <li>
            <Link to={"/about"}>
              <a class="a">About Me 🧑‍💻</a>
            </Link>
          </li>

          <li>
            <Link to={"/home"}>
              <a class="a">Home👾🏡</a>
            </Link>
          </li>

          <li>
            <Link to={"/favorites"}>
              <a class="a">Favorites🌟</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div class="input-group">
        <input
          type="text"
          value={character}
          onChange={handleChange}
          id="input-field"
        />
        <button onClick={() => onSearch(character)} class="submit-button">
          <span>ADD CHAR</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
