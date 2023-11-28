const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
