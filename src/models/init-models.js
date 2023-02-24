import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _authors from  "./authors.js";
import _countries from  "./countries.js";
import _novels from  "./novels.js";

export default function initModels(sequelize) {
  const authors = _authors.init(sequelize, DataTypes);
  const countries = _countries.init(sequelize, DataTypes);
  const novels = _novels.init(sequelize, DataTypes);

  novels.belongsTo(authors, { as: "author", foreignKey: "author_id"});
  authors.hasMany(novels, { as: "novels", foreignKey: "author_id"});
  authors.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(authors, { as: "authors", foreignKey: "country_id"});

  return {
    authors,
    countries,
    novels,
  };
}
