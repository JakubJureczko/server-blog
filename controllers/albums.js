const Album = require("../models/Album");

const getAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    res.json({ success: true, msg: "show it", data: albums });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAlbums
}