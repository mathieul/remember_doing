import React, { FunctionComponent } from "react"
import * as ReactDOM from "react-dom"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Row, Col, Alert } from "react-bootstrap"

import Sidebar from "./Sidebar"
import Details from "./Details"

const QUERY = gql`
  query {
    taskGroups @client {
      id
      label
      tasks {
        id
        label
        done
      }
    }
  }
`

const TaskDashboard: FunctionComponent<{}> = () => {
  return (
    <Query query={QUERY}>
      {({ data: { taskGroups, loading, error } }) => {
        if (loading) return "Loading..."
        if (error) return <Alert variant="danger">An error occurred ({error})</Alert>
        return (
          <Row noGutters style={{ height: "92vh" }}>
            <Col xs={2} className="px-2 py-3">
              <Sidebar tasks={taskGroups[0].tasks} />
            </Col>
            <Col xs={10} className="bg-light px-2 py-3">
              <Details task={taskGroups[0].tasks[0]} />
            </Col>
          </Row>
        )
      }}
    </Query>
  )
}

export default TaskDashboard
