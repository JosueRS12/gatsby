import * as React from 'react';
import { Link } from 'gatsby';
const Layout = ({nameComponent, name, page}) =>{
  
  return(
    <main>
      <title> hola gatsby </title>
      <div>
        <p>hola, este es el {nameComponent} de {name}</p> 
      </div>
      <ul>
        <li><Link to="/about"> go to about</Link> </li>
        <li><Link to="/"> go home </Link> </li>
      </ul>
    </main>
  );
}

export default Layout;
