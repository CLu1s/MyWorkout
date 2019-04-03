import React, { Component } from 'react'
import Layout from "../components/layout"
import Link from '../components/link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
 {
  feed{
    id
    description
  }
}
`


class LinkList extends Component {
  render() {
    return (
      <Layout>
        <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error </div>
          
          const linksToRender = data.feed
          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
      </Layout>
    )
  }
}

export default LinkList
