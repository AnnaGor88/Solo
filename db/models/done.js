const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Done extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Done.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Done',
  });
  return Done;
};
