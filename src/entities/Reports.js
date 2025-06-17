const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Reports",
    tableName: "reports",
    columns: {
        character: { type: "" },
        title: { type: "varchar" },
        image: { type: "blob", createImageBitmap: true },
        description: { type: "varchar" },
    },
    relations: {
        createdBy: {
            target: "User",
            type: "many-to-one",
            joinColumn: true,
            onDelete: "SET NULL",
        },
    }
});