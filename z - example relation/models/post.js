'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class Post extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Post.belongsTo(models.User, {
            as: 'user',
         });
         Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comment',
         });
         Post.hasMany(models.Like, {
            foreignKey: 'postId',
            as: 'likes',
         });
      }
   }
   Post.init(
      {
         caption: DataTypes.STRING,
         filename: DataTypes.STRING,
         like: DataTypes.INTEGER,
         userId: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: 'Post',
      }
   );
   return Post;
};
