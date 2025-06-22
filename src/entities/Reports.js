const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Reports",
  tableName: "reports",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    characterName: { type: "varchar" },
    title: { type: "varchar" },
    description: { type: "varchar" },
  },
  relations: {
    createdBy: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "SET NULL",
    },
  },
});

