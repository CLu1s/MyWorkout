import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/exercising">Empezar a Entrenar!</Link>
    <Link to="/excercise/excercises">Ejercicios!</Link>
  </Layout> );
}

export default IndexPage
