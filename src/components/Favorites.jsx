import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  console.log("Mis favoritos: " + myFavorites);

  return (
    <>
      <h1>Aqui estaran los Favoritos 🌟</h1>
      <br />
      <hr />
      {myFavorites.map((charFav) => {
        return (
          <div>
            <Link to={`/detail/${charFav.id}`}>
              <h2>{charFav.name}</h2>
            </Link>
            <h2>{charFav.species}</h2>
            <h2>{charFav.gender}</h2>

            <img src={charFav.image} alt={charFav.name} />
          </div>
        );
      })}
    </>
  );
};

export default Favorites;
