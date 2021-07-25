import * as React from 'react';
import Layout from './Layout';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

const Blog = ({data}) =>{
  return(
    <Layout name="hehe" nameComponent="my blog" page="wenas">
      <p> hola </p>
        { 
          data.allMdx.nodes.map( node  => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2> 
              <p>Posted: {node.frontmatter.date} </p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
    </Layout>
  )  
}

export const query = graphql`

  query{
    allMdx (sort: {fields: frontmatter___date, order: DESC}){
      nodes {
        frontmatter{
          title
          date(formatString: "MMMM D YYYY")
        }
        id
        body
      }
    }
  }
  
`

//export const query = graphql`
  //query{
    //allFile{
      //nodes{
        //name
      //}
    //}
  //}
//`; 
export default Blog;
