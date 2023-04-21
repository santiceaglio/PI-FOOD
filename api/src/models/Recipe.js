const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipes', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true, 
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    step_by_step: {
      type: Sequelize.ARRAY(Sequelize.JSON),
      allowNull: false,
      
    },
    
    
  },
  {timestamps: false}
  );
};


// title: title,
//                 healthScore: healthScore,
//                 summary: summary,
//                 image: image,
//                 typeDiets: typeDiets
