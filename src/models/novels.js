import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class novels extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_novel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id_author'
      }
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    novel_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'novels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "novels_pkey",
        unique: true,
        fields: [
          { name: "id_novel" },
        ]
      },
    ]
  });
  }
}
