const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const { postFav, getAllFavs, deleteFav } = require("../controllers/postFav");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.post("/favorites", postFav);
router.get("/favorites", getAllFavs);
router.delete("/favorites/:id", deleteFav);

module.exports = router;
