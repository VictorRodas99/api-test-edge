import { db } from '../config/db.config.js'
import { DataTypes } from 'sequelize'

export const Workout = db.define('Workout', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  main_muscle_group: {
    type: DataTypes.STRING,
    allowNull: false
  },

  workout_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  day: {
    type: DataTypes.INTEGER
  },

  series: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  repetitions: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false })
