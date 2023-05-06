import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  // Usando el UseEffect y su peticion, estoy trayendo toda la informacion del personaje (en caso de que este exista) y seteandolo en 'character' dentro de nuestro estado Local.
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <h1>{character?.name}</h1>
      <h2>{character?.species}</h2>
      <h4>{character?.status}</h4>
      <p>{character?.type}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin}</p>
      <p>{character?.location?.name}</p>
      <img src={character?.image} alt={character?.name} />
    </>
  );
};

export default Detail;
