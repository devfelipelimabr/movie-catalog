const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await db.User.create({ username, email, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
