import React,{ useState} from 'react';
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { navigate } from "gatsby"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
const POST_MUTATION = gql`
  mutation ExcerciseMutation($name: String!, $bodyPart: String!) {
    newExcercise(name: $name, bodyPart: $bodyPart) {
      name
    }
  }
`

const NewExcercise = ({data}) => {
  const [form, setForm] = useState({
    name: "",
    bodyPart: ""
  });
  let {name,bodyPart} = form;
  return (
  <Layout>
    <SEO title="Exercising" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hola Mundo!</h1>
    <input
      value={form.name}
      onChange={e =>  setForm({name: e.target.value, bodyPart: bodyPart })}
      type="text"
      placeholder="Nombre del Ejercicio"
    />
    <input
      value={form.bodyPart}
      onChange={e =>  setForm({name: name, bodyPart: e.target.value})}
      type="text"
      placeholder="Parte del cuerpo que trabaja este ejercicio"
    />
    <Mutation mutation={POST_MUTATION} variables={{ name, bodyPart }} onCompleted={() => navigate('/excercise/excercises')}>
      {postMutation => <button onClick={postMutation}>Submit</button>}
    </Mutation>
  </Layout> );
}

export default NewExcercise
