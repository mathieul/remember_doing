import React, { Component } from "react"
import * as ReactDOM from "react-dom"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Row, Col, Alert } from "react-bootstrap"

import HelloWorld from "./HelloWorld"

const QUERY = gql`
  query {
    tasks @client {
      id
      label
      done
    }
  }
`

export default class extends Component {
  public render(): JSX.Element {
    return (
      <Query query={QUERY}>
        {({ data: { tasks, loading, error } }) => {
          if (loading) return "Loading..."
          if (error) return <Alert variant="danger">An error occurred ({error})</Alert>
          return (
            <Row noGutters style={{ height: "92vh" }}>
              <Col xs={2} className="px-2 py-3">
                Tasks: {JSON.stringify(tasks, null, 2)}
              </Col>
              <Col xs={10} className="bg-light px-2 py-3">
                Tasks: {tasks.length}
                <HelloWorld />
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}
