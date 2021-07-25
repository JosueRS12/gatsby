import * as React from "react";
import Layout from './Layout';
import {setBackgroundColor, container, containerImg} from './styles.module.css';
import {StaticImage} from 'gatsby-plugin-image';


const IndexPage = () =>{
  return(
    <main className={setBackgroundColor}>
      <h2> Welcome to indexpage </h2>
      <Layout nameComponent="HomePage" className={container}/> 
      <StaticImage alt="imagen random" src="https://thelandscapephotoguy.com/wp-content/uploads/2019/01/landscape%20moravia%20gentle.jpg" className={containerImg}/>
    </main>
  );
}

export default IndexPage;
