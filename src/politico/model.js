const {DataTypes, Model} = require('sequelize');

const {sequelizeCon} = require('../config/db-config');
const {Partido} = require('../partido/model');
const {Mandato} = require('../mandato/model');
class Politico extends Model {}

Politico.init({
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    foto: DataTypes.STRING,
    email: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    pais: DataTypes.STRING,
    id_partido: DataTypes.INTEGER,
    mandatoAtual: DataTypes.INTEGER
}, {
    sequelize: sequelizeCon,
    schema: 'public',
    modelName: 'politico'
});

Politico.belongsTo(Partido, {
    foreignKey: "id_partido",
    onDelete: 'CASCADE'
})

// Partido.hasMany(Politico, {
//     foreignKey: "id_partido"
// })

Mandato.belongsTo(Politico, {
    foreignKey: 'id_politico',
    onDelete: 'CASCADE'
})

// Politico.hasMany(Mandato, {foreignKey: 'cpf'})

sequelizeCon.sync();

module.exports = {
    Politico
};