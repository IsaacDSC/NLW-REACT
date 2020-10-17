
import Sequelize from 'sequelize';
import * as dbConfig from '../config/database';

const connection = new Sequelize(dbConfig)

export default connection