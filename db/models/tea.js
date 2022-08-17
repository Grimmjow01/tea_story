const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Comment, { foreignKey: 'tea_id' });
    }
  }
  Tea.init({
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    discription: DataTypes.STRING,
    sort_tea: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
