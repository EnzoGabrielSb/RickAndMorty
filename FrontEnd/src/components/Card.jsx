import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, deleteFavorite } from "../redux/actions";
import "../styles/Card.css";

const Card = ({ name, species, gender, image, onClose, id, key = id }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);
  console.log(isFav);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(
        addFavorites({ name, species, gender, image, onClose, id, key })
      );
    }
  };

  useEffect(() => {
    if (myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  return (
    <div>
      <div class="card">
        <div class="card-border-top"></div>

        <div>
          <img src={image} alt={name} class="img" />
        </div>

        <span>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
        </span>

        <p>
          <h2 class="job">{species}</h2>
        </p>

        <p>
          <h2 class="job">{gender}</h2>
        </p>

        <button onClick={onClose} class="job">
          X
        </button>

        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
    </div>
  );
};

export default Card;
