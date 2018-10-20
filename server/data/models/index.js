import Sequelize from 'sequelize';

import config from '../../config'
import UserModel from './user';

const sequelize = new Sequelize(
    config.sequelizeConfig.database,
    config.sequelizeConfig.userName,
    config.sequelizeConfig.password,
    config.sequelizeConfig.settings);

var User = UserModel(sequelize, Sequelize);

export { User };