import React from 'react';
import BigScreen from '../components/BigScreen';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
function returnFilteredObject(object,filter){
  if(object.name === filter){
    return true
  }
  return false
}

const IndexPage = ({data}) => {
  const dataOfLuis = data.allMongodbMyWorkoutWorkouts.edges.find(item => returnFilteredObject(item.node,"luis"));
  const dataOfMilhy = data.allMongodbMyWorkoutWorkouts.edges.find(item => returnFilteredObject(item.node,"milhy"));
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BigScreen dataOfLuis={dataOfLuis.node} dataOfMilhy={dataOfMilhy.node} />
  </Layout> );
}

export default IndexPage


export const query = graphql`
query {
	allMongodbMyWorkoutWorkouts {
	  edges {
      node {
        name
        exerciseArrayPosition
        exercises{
          name
          bodyPart
          weight
          serie
          maxSerie
          reps
          tempo
          restTime
        }
      }
    }
	} 
}
`