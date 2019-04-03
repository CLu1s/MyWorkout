import React from 'react';
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Query } from 'react-apollo'
import { Link } from "gatsby"
import gql from 'graphql-tag'
const FEED_QUERY = gql`
{
  excercises{
    id
    name
  }
}
`

const Exercises = ({data}) => {
  let linksToRender = []
  return (
  <Layout>
    <SEO title="Exercising" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hola Mundo!</h1>
    <Link to="excercise/new" > Nuevo Ejercicio </Link>
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error </div>
        linksToRender = data.excercises
        return (
          <div>
            <ul>
              {linksToRender.map(link => <li><Link to={`/excercises/${link.id}`} > {link.name} </Link></li>)}
            </ul>
          </div>
        )
      }}
      </Query>
  </Layout> );
}

export default Exercises
