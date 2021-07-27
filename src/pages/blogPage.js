import * as React from 'react';
import Layout from './Layout';
import {graphql, Link} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
//import Img from "gatsby-image";
//import {MDXRenderer} from 'gatsby-plugin-mdx';

export const query = graphql`
  query{
    allStrapiArticle {
      nodes {
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
  }
` 

const Blog = ({data}) =>{
  const articleData = data.allStrapiArticle.nodes;
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

export default Blog;
