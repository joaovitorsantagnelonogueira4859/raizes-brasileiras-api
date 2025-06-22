const CryptoJS = require("crypto-js");
const { AppDataSource } = require("../database/data-source");
const userRepo = AppDataSource.getRepository("User");

module.exports = {
  register: async (req, res) => {
    const { name, email, password } = request.body;

    try {
      const encrypted = CryptoJS.SHA256(password).toString();
      const user = userRepo.create({ name, email, password: encrypted });
      await userRepo.save(user);

      res.status(201)
        .json({ id: user.id, name: user.name, email: user.email });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const encrypted = CryptoJS.SHA256(password).toString();

    const user = await userRepo.findOneBy({ email, password: encrypted });

    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  },
};