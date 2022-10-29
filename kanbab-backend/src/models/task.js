'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Column)
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    subtasks: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
