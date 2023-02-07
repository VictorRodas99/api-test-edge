import { db } from '../config/db.config.js'
import { DataTypes } from 'sequelize'
import { Workout } from './Workout.js'

export const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.hasMany(Workout, {
  foreignKey: 'user_id',
  sourceKey: 'id'
})

Workout.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id'
})
