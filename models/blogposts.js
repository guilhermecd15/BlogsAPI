module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    image: DataTypes.STRING,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users' });
  };

  BlogPosts.associate = (models) => {
    BlogPosts.hasMany(models.PostsCategories,
      { foreignKey: 'post_id', as: 'postscategories' });
  };

  return BlogPosts;
};
