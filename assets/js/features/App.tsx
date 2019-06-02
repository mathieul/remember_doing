import * as React from "react"
import * as ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"

import { getClient } from "../lib/apolloHelpers"
import Root from "./Root"

import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <ApolloProvider client={getClient()}>
    <Root />
  </ApolloProvider>,
  document.getElementById("react-app")
)
