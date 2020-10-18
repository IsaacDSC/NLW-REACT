import {Sequelize} from 'sequelize'

export const database = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'nlw',
  username: 'dev',
  password: 'secret',
  define:{
    timestamps: true
  }
})

