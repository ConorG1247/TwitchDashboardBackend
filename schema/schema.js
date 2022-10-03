const mongoose = require("mongoose");

const blockListSchema = new mongoose.Schema({
  user: String,
  category: [{ name: String, id: String }],
  channel: [{ name: String, id: String }],
});

const blockList = mongoose.model("blockList", blockListSchema);

module.exports = {
  blockList,
};
