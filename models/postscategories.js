module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
    { timestamps: false });
  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, { as: 'blogposts',
      through: PostsCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPosts.belongsToMany(models.Categories, { as: 'categories',
      through: PostsCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };
  return PostsCategories;
};