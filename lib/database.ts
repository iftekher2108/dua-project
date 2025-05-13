import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../dua_main.sqlite'
});

export default sequelize;