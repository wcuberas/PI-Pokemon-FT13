const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
      
      name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
// ENUM se podra usar para las opciones ???