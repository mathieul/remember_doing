import React, { Component, Fragment } from "react"
import * as ReactDOM from "react-dom"

type Props = {
  tasks: object[]
}

export default class extends Component<Props, {}> {
  public render(): JSX.Element {
    return (
      <Fragment>
        <h2>Tasks</h2>
        {JSON.stringify(this.props.tasks, null, 2)}
      </Fragment>
    )
  }
}
