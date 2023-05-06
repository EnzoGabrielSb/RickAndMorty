/*
const axios = require("axios");

const getCharDetail = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin?.name,
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

module.exports = getCharDetail;
*/
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  const { detailId } = req.params;

  try {
    const response = await axios(URL + detailId);
    const characterDetail = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      origin: response.data.origin?.name,
    };
    res.status(200).json(characterDetail);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCharDetail;
