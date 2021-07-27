import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export const query = graphql`
  query Article($title: String!) {
    article: strapiArticle(title: {eq: $title}){
      title
      authorName
      image {
        localFile{
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
            )
          }
        }
      }
      manualDate
      id
    }
  }
`

const Article = ({data}) => {
  const post = data.article;
  return(
    <Layout name="hehe" nameComponent="my blog" page="wenas">
      <p> hola </p>
        { 
          <ul>
          {articleData.map(post => (
            <li key={post.id}>
              <h2>
                <Link to={`/${post.id}`}>{post.title}</Link>
              </h2>
              <GatsbyImage image={getImage(post.image.localFile)}/>
            </li>
          ))}
          </ul>
        }
    </Layout>
  )
}

export default Article;




