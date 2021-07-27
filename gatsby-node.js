const fs = require("fs");

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(
    `
    {
      articles: allStrapiArticle {
        edges{
          node {
            title
          }
        }   
      }
    }
    `
  );
  if(result.errors) {
    throw result.errors;
  }

  // create articles pages
  
  const post = result.data.articles.edges;
  const ArticleTemplate = require.resolve('./src/templates/article.js');

  post.forEach((category, index) => {
    createPage({
      path: `/article/${post.node.title}`,
      component: ArticleTemplate,
      context: {
        name: article.node.name,
      },
    });
  });
};

exports.onPostBuild = () => {
  fs.copyFile(`./firebase.json`, `./public/firebase.json`, (err) =>{
    if (err){
      throw err;
    }
  });
};
