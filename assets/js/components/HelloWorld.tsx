import React, { Component, ChangeEvent } from "react"
import * as ReactDOM from "react-dom"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Card, Alert, Button } from "react-bootstrap"
import styled from "@emotion/styled"

const Well = styled.div`
  padding: 30px;
  background-color: lightcoral;
  width: 50%;
  text-align: center;
`

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

const LOCAL_QUERY = gql`
  query {
    counter @client
  }
`

const LOCAL_MUTATION = gql`
  mutation {
    increaseCounter(id: 42) @client
  }
`

export default class extends Component {
  public render(): JSX.Element {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Hello World!</Card.Title>
          <Alert variant="warning">
            <Query query={LOCAL_QUERY}>{({ data }) => JSON.stringify(data, null, 4)}</Query>
          </Alert>
          <Alert variant="info">
            <Query query={QUERY}>{({ data }) => JSON.stringify(data, null, 4)}</Query>
          </Alert>
          <Alert variant="success">
            <Query query={ME_QUERY}>{({ data }) => JSON.stringify(data, null, 4)}</Query>
          </Alert>
          <Well>
            <Mutation mutation={LOCAL_MUTATION}>
              {(mutate, { loading, error }) => {
                if (loading) {
                  return (
                    <Button variant="primary" disabled={true}>
                      Loading...
                    </Button>
                  )
                }
                if (error) {
                  return (
                    <Button variant="primary" disabled={true}>
                      Error: {error}
                    </Button>
                  )
                }
                return (
                  <Button onClick={mutate} variant="primary">
                    Increase Counter
                  </Button>
                )
              }}
            </Mutation>
          </Well>
        </Card.Body>
      </Card>
    )
  }
}
