// const Users = db.import("../models/UserModel.js");

const { UserModel } = require("../models");

const getAllUsers = async () => {
  // Find all users
  return await UserModel.findAll()
    .then(users => {
      // console.log("All users:", JSON.stringify(users, null, 4));
      return users;
    }).catch(err => console.log("Error fetching users: ", err));
};

const getUser = async query => {
  // Find all users
  return await UserModel.findAll({ where: query }).then(users => {
    // console.log("All users:", JSON.stringify(users, null, 4));
    if (UserModel.length && users[0].dataValues) {
      return users[0].dataValues;
    }
    return [];
  });
};

const createUser = async data => {
  // Create a new user
  console.log(data);
  data.gender = data.gender.toString();
  return await UserModel.create(data)
    .then(result => result)
    .catch(err => {
      console.log(err);
      return { error: err };
    });
};

const updateUser = async data => {
  // Change everyone without a last name to "Doe"
  const { email } = data;
  delete data.email;
  data.gender = data.gender.toString();
  console.log(data);
  return await UserModel.update(data, {
    where: {
      email: email
    }
  })
    .then(result => {
      console.log("Updated", result);
      return result;
    })
    .catch(err => {
      return {
        error: err
      };
    });
};

const deleteUser = async email => {
  // Delete everyone named "Jane"
  return await UserModel.destroy({
    where: {
      email
    }
  })
    .then(result => {
      console.log("Deleted", result);
      return result;
    })
    .catch(err => {
      return {
        error: err
      };
    });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
};