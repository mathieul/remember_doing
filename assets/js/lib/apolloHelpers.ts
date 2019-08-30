import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { split } from "apollo-link"
import { hasSubscription } from "@jumpn/utils-graphql"
import * as AbsintheSocket from "@absinthe/socket"
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link"
import { Socket as PhoenixSocket } from "phoenix"

import { resolvers, typeDefs } from "./localResolvers"

const absintheSocketLink = createAbsintheSocketLink(
  AbsintheSocket.create(new PhoenixSocket("ws://localhost:4000/socket"))
)

const link = split(
  operation => hasSubscription(operation.query),
  absintheSocketLink,
  createHttpLink({ uri: "http://localhost:4000/api" })
)

const cache = new InMemoryCache()
const client = new ApolloClient({ cache, link, typeDefs, resolvers })

cache.writeData({
  data: {
    counter: 0,
    taskGroups: [
      {
        id: 10,
        label: "Yesterday",
        tasks: [
          { id: 1, label: "Some task here", done: false, __typename: "Task" },
          { id: 2, label: "Il fait si beau aujourd'hui", done: false, __typename: "Task" },
          { id: 3, label: "Ah ok ok ok!", done: true, __typename: "Task" },
          { id: 4, label: "Correction immediate, je ne vous connais pas", done: false, __typename: "Task" },
          { id: 5, label: "Like a rolling stone", done: true, __typename: "Task" },
        ],
        __typename: "TaskGroup",
      },
    ],
    tasks: [
      { id: 42, label: "Uniiiiiik", done: false, __typename: "Task" },
    ]
  },
})

export const getClient = () => client
