import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class authors extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_author: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id_country'
      }
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'authors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "authors_pkey",
        unique: true,
        fields: [
          { name: "id_author" },
        ]
      },
    ]
  });
  }
}
