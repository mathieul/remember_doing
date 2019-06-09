import React, { Component } from "react"
import * as ReactDOM from "react-dom"
import { Container, Navbar, Nav } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

import TaskDashboard from "./TaskDashboard"
import Demo from "./Demo"
import Static from "./Static"

export default class extends Component {
  public render(): JSX.Element {
    return (
      <Router>
        <Navbar className="bg-primary" style={{ height: "8vh" }}>
          <Navbar.Brand href="/" className="text-light">
            Remember Doing
          </Navbar.Brand>
          <Nav variant="pills">
            <Nav.Item>
              <LinkContainer to="/" exact>
                <Nav.Link>TaskDashboard</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/demo">
                <Nav.Link>Demo</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/static">
                <Nav.Link>Static</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Container fluid>
          <Route exact path="/" component={TaskDashboard} />
          <Route exact path="/demo" component={Demo} />
          <Route path="/static" component={Static} />
        </Container>
      </Router>
    )
  }
}
