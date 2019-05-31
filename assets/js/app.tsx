import css from "../css/app.css"
import "phoenix_html"

// import socket from "./socket"

import * as React from "react"
import * as ReactDOM from "react-dom"

class Root extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h2>Testing stuff...</h2>
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("react-app"))
