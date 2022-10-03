const mongoose = require("mongoose");

const blockListSchema = new mongoose.Schema({
  games: [{ name: String, id: String }],
  channels: [{ name: String, id: String }],
});

const blockList = mongoose.model("blockList", blockListSchema);

module.exports = {
  blockList,
};
