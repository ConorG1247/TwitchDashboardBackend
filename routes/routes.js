const router = require("express").Router();
const { blockList } = require("../schema/schema");
const { addGameToBlockList } = require("../models/models");

// router.post("/create", async (req, res) => {
// const data = await blockList
// });

router.get("/get/all/:user", async (req, res) => {
  const data = await blockList.find({ user: req.params.user });

  res.json(data);
});

router.post("/add/category", async (req, res) => {
  const response = await addGameToBlockList(req.body);
  res.json(response);
});

router.post("/add/channel", async (req, res) => {
  const data = await blockList.updateOne(
    { user: req.body.user },
    {
      $push: {
        channels: {
          name: req.body.name,
          id: req.body.id,
        },
      },
    },
    { upsert: true }
  );
  res.json(data);
});

module.exports = router;
