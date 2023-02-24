import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class countries extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_country: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "countries_pkey",
        unique: true,
        fields: [
          { name: "id_country" },
        ]
      },
    ]
  });
  }
}
