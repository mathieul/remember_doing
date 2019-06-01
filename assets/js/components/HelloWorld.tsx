import React, { Component, ChangeEvent } from "react"
import * as ReactDOM from "react-dom"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Card, Alert } from "react-bootstrap"

const QUERY = gql`
  query {
    helloWorld {
      id
      world
    }
  }
`

const ME_QUERY = gql`
  {
    me {
      id
      email
      name
    }
  }
`

export default class extends Component {
  public render(): JSX.Element {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Hello World!</Card.Title>
          <Card.Text>
            <Alert variant="info">
              <Query query={QUERY}>{({ data }) => JSON.stringify(data, null, 4)}</Query>
            </Alert>
            <Alert variant="success">
              <Query query={ME_QUERY}>{({ data }) => JSON.stringify(data, null, 4)}</Query>
            </Alert>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
