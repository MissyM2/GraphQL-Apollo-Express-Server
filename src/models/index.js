/** @format */
/*
let notes = {
  1: {
    id: "1",
    text: "Hello World"
  },
  2: {
    id: "2",
    text: "By World"
  }
};

export default {
  notes
};
*/

import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);

const models = {
  Note: sequelize.import("./notes")
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
