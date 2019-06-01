import React, { Component, Fragment } from "react"
import * as ReactDOM from "react-dom"
import { Container, Navbar, Row, Col } from "react-bootstrap"
import HelloWorld from "./HelloWorld"

export default class extends Component {
  public render(): JSX.Element {
    return (
      <Fragment>
        <Navbar bg="light">
          <Navbar.Brand href="/">Remember Doing</Navbar.Brand>
        </Navbar>
        <Container>
          <HelloWorld />
        </Container>
      </Fragment>
    )
  }
}
