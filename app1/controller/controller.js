const { save, getAll, getById, update, del } = require("../services/service");

const insert = async (req, res) => {
  try {
    const user = { ...req.body };

    await save(user.nickName);

    return res.status(201).json({ msg: "user created" });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const findAll = async (req, res) => {
  const users = await getAll();
  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const user = await getById(req.params.id);
  return res.status(200).json(user);
};

const alterUser = async (req, res) => {

  try {
    const user = { ...req.body };
    await update(req.params.id, user.nickName);

    return res.status(201).json({ msg: "user updated" });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const deleteUser = async (req, res) => {
  await del(req.params.id);
  return res.status(204).json();
};

module.exports = { insert, findAll, findById, alterUser, deleteUser };
