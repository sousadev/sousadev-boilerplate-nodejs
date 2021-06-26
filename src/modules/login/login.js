const CryptoJS = require('crypto-js');
const connection = require('../../services/mongoDB/connection');
const jwt = require('jsonwebtoken');

const User = require('../../database/MongoDB/Models/User.Model');
const generateToken = require('../../helpers/generateTokenHelper');

const login = async (req, res) => {
  const data = await req.body;

  await User.findOne({ username: data.username })
    .where({ status: 'active' })
    .select('+password')
    .exec(async (err, response) => {
      const bytes = await CryptoJS.AES.decrypt(
        response.password,
        process.env.SECRET_PASS_VALIDATION
      );
      const decryptedPass = await bytes.toString(CryptoJS.enc.Utf8);
      if ((await decryptedPass) === data.password) {
        const idUser = await response._id;
        const token = await generateToken(
          idUser,
          data.username,
          await response.userType
        );

        return res.json({
          id: idUser,
          auth: true,
          token: token,
        });
      } else {
        await res
          .status(500)
          .json({ message: 'Invalid Login. Please contact support!' });
      }
    });
};

module.exports = login;
