const User = require('../../database/MongoDB/Models/User.Model');
const jwt = require('jsonwebtoken');

const logout = async (req, res) => {
  res.json({ auth: false, token: null });
};

// Caso necessite maior controle da destruição do logout será necessário criar na base uma Lista Negra no DB
// Este código apenas irá apagar do browser para não utilizar o token atual.

module.exports = logout;
