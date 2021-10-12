/** @format */

const note = (sequelize, DataTypes) => {
  const Note = sequelize.define("note", {
    text: DataTypes.STRING
  });
  return Note;
};

export default note;
