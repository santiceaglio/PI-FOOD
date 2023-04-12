const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipes', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    dish_summary:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_score:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    step_by_step: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    
    
  },
  {timestamps: false}
  );
};



