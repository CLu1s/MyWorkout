import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Exercising = ({data}) => {
  return (
  <Layout>
    <SEO title="Exercising" keywords={[`gatsby`, `application`, `react`]} />
    {/* <BigScreen /> */}
    <h1>Hola Mundo!</h1>
  </Layout> );
}

export default Exercising
