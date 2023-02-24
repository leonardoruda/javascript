import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

interface PhraseInstance extends Model {
    id: number,
    author: string,
    txt: string
};

export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: DataTypes.STRING,
    txt: DataTypes.TEXT

}, {tableName: 'phrases', timestamps: false});
