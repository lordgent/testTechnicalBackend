const { user } = require("../../models");

exports.getAllUser = async (req, res) => {
  try {
    const data = await user.findAll({
      attributes: {
        exclude: ["cratedAt", "updatedAt", "password"],
      },
    });

    res.send({
      status: "success",
      message: "all users",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      mesage: "server error",
    });
  }
};

exports.getByIdUser = async (req, res) => {
  try {
    const data = await user.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      return res.status(400).send({
        status: "bad request",
        message: "user not found!",
      });
    }
    res.send({
      status: "success",
      message: "success get user ",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "server Error",
    });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const cek = await user.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!cek) {
      return res.status(400).send({
        status: "bad request",
        message: "user not found!",
      });
    }
    const data = await user.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send({
      status: "success",
      message: "update user success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const cek = await user.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!cek) {
      return res.status(400).send({
        status: "bad request",
        message: "user not found!",
      });
    }
    const data = await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      status: "success",
      message: "delete user success",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "server Error",
    });
  }
};
