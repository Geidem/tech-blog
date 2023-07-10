const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        title: {
         type: DataTypes.STRING,
            allowNull: true,
    },
        body: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
    }

);

module.exports = Post;
