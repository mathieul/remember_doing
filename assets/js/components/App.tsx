import * as React from "react"
import * as ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

import Root from "./Root"

import "bootstrap/dist/css/bootstrap.min.css"

const cache = new InMemoryCache()
const link = new HttpLink({ uri: "http://localhost:4000/api" })
const client = new ApolloClient({ cache, link })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("react-app")
)
