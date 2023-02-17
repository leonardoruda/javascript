import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/postgres';

interface UserInstance extends Model {id: number, username: string, age: number};

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get(){
            return this.getDataValue('name').replace(' ', '_').toLowerCase();
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(value: number) {
            if (value < 18) {
                value = 18
            };
            this.setDataValue('age', value);
        },
    }    
}, {tableName: 'users', timestamps: false})