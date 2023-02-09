import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';
const Sequelize = require('Sequelize');

interface UserInstance extends Model {
    id: number;
    username: string;
    age: number;
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        get() {
            const raw = this.getDataValue('username');
            return raw.replace(' ', '_').toLowerCase();
        }
    },
    nameFirstLetter: {
        type: DataTypes.VIRTUAL,
        get() {
            let name = this.getDataValue('username');
            return name.charAt(0);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(value: number) {
            if (value < 18) {
                value = 18;
            }
            this.setDataValue('age', value);
        }
    }
}, {
    tableName: 'users',
    timestamps: false
});

/*
class myModel extends Model {}
myModel.init({
    columnA: {
        type: Sequelize.BOOLEAN,
        validate: {
            is: ['a-z', 'i'],
            max: 23,
            isIn: {
                args: [['en', 'pt']],
                msg: 'Must be English or Portuguese'
            }
        },
        field: 'column_A'
    },
    columnB: Sequelize.STRING,
    columnC: 'MY VERY OWN COLUMN TYPE'
}, {sequelize})
*/