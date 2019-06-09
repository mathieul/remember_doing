import React, { Component, Fragment } from "react"
import * as ReactDOM from "react-dom"

type Props = {
  task: object
}

export default class extends Component<Props, {}> {
  public render(): JSX.Element {
    return (
      <Fragment>
        <h2>Details</h2>
        task: {JSON.stringify(this.props.task, null, 4)}
      </Fragment>
    )
  }
}
