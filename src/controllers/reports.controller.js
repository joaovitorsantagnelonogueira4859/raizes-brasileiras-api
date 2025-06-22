const { AppDataSource } = require("../database/data-source");
const Reports = require("../entities/Reports"); 

const reportRepo = AppDataSource.getRepository(Reports);

module.exports = {
  create: async (req, res) => {
    const { title, description, character } = req.body;

    try {
      const report = reportRepo.create({ title, description, character });
      await reportRepo.save(report);
      res.status(201).json(report);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  list: async (req, res) => {
    try {
      const reports = await reportRepo.find();
      res.json(reports);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
