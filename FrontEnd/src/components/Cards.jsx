import Card from "./Card";
import "../styles/Cards.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      <div class="cards">
        {characters.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={() => onClose(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
