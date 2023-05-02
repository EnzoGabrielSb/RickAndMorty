import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../redux/actions";

const Favorites = () => {
  const dispath = useDispatch();

  const handlerOrder = (event) => {
    dispath(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispath(filterCards(event.target.value));
  };

  const { myFavorites } = useSelector((state) => state);
  console.log("Mis favoritos: " + myFavorites);

  return (
    <>
      <h1>Aqui estaran los Favoritos 🌟</h1>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disabled">
            Order FavCards
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="filter" disabled="disabled">
            Filter FavCards By:
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
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
