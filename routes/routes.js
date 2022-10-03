const router = require("express").Router();
const { blockList } = require("../schema/schema");
const {
  addGameToBlockList,
  addChannelToBlockList,
  deleteCategoryFromBlockList,
  deleteChannelFromBlockList,
} = require("../models/models");

// GET ROUTES //

router.get("/get/all/:user", async (req, res) => {
  const data = await blockList.find({ user: req.params.user });
  if (data.length === 0) {
    return res.json({
      success: false,
      message: `Couldn't find data for ${req.params.user}`,
    });
  }
  return res.json({
    user: data[0].user,
    blocklist: { category: data[0].category, channel: data[0].channel },
  });
});

// POST ROUTES //

router.post("/add/category", async (req, res) => {
  const response = await addGameToBlockList(req.body);

  if (response.upsertedId) {
    return res.json({
      success: true,
      message: `Created user ${req.body.user} and added ${req.body.name} to category blocklist.`,
    });
  }
  return res.json({
    success: true,
    message: `Added ${req.body.name} to category blocklist.`,
  });
});

router.post("/add/channel", async (req, res) => {
  const response = await addChannelToBlockList(req.body);
  if (response.upsertedId) {
    return res.json({
      success: true,
      message: `Created user ${req.body.user} and added ${req.body.name} to channel blocklist.`,
    });
  }
  return res.json({
    success: true,
    message: `Added ${req.body.name} to channel blocklist.`,
  });
});

// DELETE ROUTES //

router.delete("/remove/channel", async (req, res) => {
  const response = await deleteChannelFromBlockList(req.body);
  if (response.modifiedCount === 0) {
    return res.json({
      success: false,
      message: "Failed to delete from channel blocklist",
    });
  }
  return res.json({
    success: true,
    message: `Deleted ${response.modifiedCount} result(s) from channel blocklist.`,
  });
});

router.delete("/remove/category", async (req, res) => {
  const response = await deleteCategoryFromBlockList(req.body);

  if (response.modifiedCount === 0) {
    return res.json({
      success: false,
      message: "Failed to delete from category blocklist",
    });
  }
  return res.json({
    success: true,
    message: `Deleted ${response.modifiedCount} result(s) from category blocklist.`,
  });
});

module.exports = router;
