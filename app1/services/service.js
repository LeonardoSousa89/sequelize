const user = require("../db/models/models");

const save = async (nickName) => await user.create({ nickName });

const getAll = async () => await user.findAll();

const getById = async (id) => await user.findByPk(id);

const update = async (id, newNickName) => {
  const userUpdated = await user.findByPk(id);

  userUpdated.nickName = newNickName;

  await userUpdated.save();
};

const del = async (id) => await user.destroy({ where: { id } });

module.exports = { save, getAll, getById, update, del };
