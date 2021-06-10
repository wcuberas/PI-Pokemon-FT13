const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
// ENUM se podra usar para las opciones ???