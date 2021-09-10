'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         User.hasMany(models.Post, {
            foreignKey: 'userId',
         });
         // ===========user  followers -===================
         User.hasMany(models.Follower, {
            foreignKey: 'userId',
         });
         User.hasMany(models.Follower, {
            foreignKey: 'userFollowId',
         });
         // ===============================================

         User.hasMany(models.Comment, {
            foreignKey: 'userId',
         });

         // ===========user  chat -===================
         User.hasMany(models.Chat, {
            foreignKey: 'userFromId',
         });
         User.hasMany(models.Chat, {
            foreignKey: 'userToId',
         });
         // ===============================================

         User.hasMany(models.Like, {
            foreignKey: 'userId',
         });
      }
   }
   User.init(
      {
         email: DataTypes.STRING,
         name: DataTypes.STRING,
         username: DataTypes.STRING,
         password: DataTypes.STRING,
         image: DataTypes.STRING,
         bio: DataTypes.STRING,
         usernotif: DataTypes.BOOLEAN,
      },
      {
         sequelize,
         modelName: 'User',
      }
   );
   return User;
};
