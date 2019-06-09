import React, { FunctionComponent, Fragment } from "react"
import * as ReactDOM from "react-dom"

type Props = {
  tasks: object[]
}

const Sidebar: FunctionComponent<Props> = ({ tasks }) => {
  return (
    <Fragment>
      <h2>Tasks</h2>
      {JSON.stringify(tasks, null, 2)}
    </Fragment>
  )
}
export default Sidebar
