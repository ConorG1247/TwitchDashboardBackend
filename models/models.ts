const { blockList } = require("../schema/schema");

const addGameToBlockList = async (body: {
  user: string;
  name: string;
  id: string;
}) => {
  const userExistsCheck = await blockList.findOne({ user: body.user });

  if (!userExistsCheck) {
    const data = new blockList({
      user: body.user,
      blockList: {
        games: [{ name: body.name, id: body.id }],
        channels: [],
      },
    });

    const res = await data.save();

    return res;
  }

  //   const data = new blockList({ name: body.name, id: body.id });

  //   const res = await data.save();

  //   return res;
};

const addChannelToBlockList = async (body: {
  user: string;
  name: string;
  id: string;
}) => {
  const userExistsCheck = await blockList.findOne({ user: body.user });

  const data = new blockList({ name: body.name, id: body.id });

  // adds data to the mongo database
  const res = await data.save();

  return res;
};
