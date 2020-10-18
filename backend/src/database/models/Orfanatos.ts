import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../../config/database";

export class Orfanatos extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Orfanatos.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        latitude: {
            type: new DataTypes.FLOAT,
        },
        longitude: {
            type: new DataTypes.FLOAT,
        },
        about: {
            type: new DataTypes.TEXT,
        },
        instructions: {
            type: new DataTypes.TEXT,
        },
        open_on_weekends: {
            type: new DataTypes.STRING(8),
        }
    },
    {
        tableName: "orfanatos",
        sequelize: database, // this bit is important
    }
);

//Orfanatos.sync({ force: true }).then(() => console.log("Node table created"));