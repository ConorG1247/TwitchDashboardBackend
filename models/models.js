const { blockList } = require("../schema/schema");

const addGameToBlockList = async (body) => {
  const data = await blockList.updateOne(
    { user: body.user },
    {
      $push: {
        category: {
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
        channel: {
          name: body.name,
          id: body.id,
        },
      },
    },
    { upsert: true }
  );

  return data;
};

const deleteCategoryFromBlockList = async (body) => {
  const data = await blockList.updateOne(
    { user: body.user },
    { $pull: { category: { id: body.id } } }
  );

  return data;
};

const deleteChannelFromBlockList = async (body) => {
  const data = await blockList.updateOne(
    { user: body.user },
    { $pull: { channel: { id: body.id } } }
  );

  return data;
};

module.exports = {
  addGameToBlockList,
  addChannelToBlockList,
  deleteCategoryFromBlockList,
  deleteChannelFromBlockList,
};
