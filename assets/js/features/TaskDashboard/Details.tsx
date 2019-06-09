import React, { Fragment, FunctionComponent } from "react"
import * as ReactDOM from "react-dom"

type Props = {
  task: object
}

const Details: FunctionComponent<Props> = ({ task }) => {
  return (
    <Fragment>
      <h2>Details</h2>
      task: {JSON.stringify(task, null, 4)}
    </Fragment>
  )
}
export default Details
