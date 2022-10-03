const { blockList } = require("../schema/schema");

const addGameToBlockList = async (body) => {
  const data = await blockList.updateOne(
    { user: body.user },
    {
      $push: {
        categories: {
          name: body.name,
          id: body.id,
        },
      },
    },
    { upsert: true }
  );

  return data;
};

const addChannelToBlockList = async (body) => {
  const data = await blockList.updateOne(
    { user: body.user },
    {
      $push: {
        channels: {
          name: body.name,
          id: body.id,
        },
      },
    },
    { upsert: true }
  );

  return data;
};

module.exports = {
  addGameToBlockList,
  addChannelToBlockList,
};
