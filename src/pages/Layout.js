import * as React from 'react';
import { Link } from 'gatsby';
import {useStaticQuery, graphql} from 'gatsby';
const Layout = ({nameComponent, name, page, children}) =>{
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata{
          title
        }
      }
    }
  `);
  return(
    <main>
      <header>{data.site.siteMetadata.title}</header>
      <title> hola gatsby </title>
      <div>
        <p>hola, este es el {nameComponent} de {name}</p> 
      </div>
      <ul>
        <li><Link to="/about"> go to about</Link> </li>
        <li><Link to="/"> go home </Link> </li>
        <li><Link to="/blogPage"> go to blog </Link> </li>
      </ul>
      {children}
    </main>
  );
}

export default Layout;
