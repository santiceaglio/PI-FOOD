const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
 
    sequelize.define('diets', {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        name:{
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
      },
      {timestamps: false}
      );
}