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
