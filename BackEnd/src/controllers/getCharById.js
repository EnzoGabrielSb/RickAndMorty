/*
const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end("Personaje Inexistente");
    });
};

module.exports = getCharById;
*/

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(URL + id);
    const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCharById;
