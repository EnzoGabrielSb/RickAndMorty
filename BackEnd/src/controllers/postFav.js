const DB_favs = require("../utils/favs");

const postFav = (req, res) => {
  DB_favs.push(req.body);
  res.status(201).json(DB_favs);
};

const getAllFavs = (req, res) => {
  res.status(200).json(DB_favs);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const DB_favsFiltered = DB_favs.filter((char) => char.id !== Number(id));

  res.status(200).json(DB_favsFiltered);
};

module.exports = { postFav, getAllFavs, deleteFav };
