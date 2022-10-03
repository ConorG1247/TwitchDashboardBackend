const mongoose = require("mongoose");

const blockListSchema = new mongoose.Schema({
  user: String,
  blockList: {
    games: [{ name: String, id: String }],
    channels: [{ name: String, id: String }],
  },
});

const blockList = mongoose.model("blockList", blockListSchema);

module.exports = {
  blockList,
};
