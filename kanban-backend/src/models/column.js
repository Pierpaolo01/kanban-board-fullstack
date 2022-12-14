'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Column extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Board);
      this.hasMany(models.Task);
    }
  }
  Column.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Column',
  });
  return Column;
};

