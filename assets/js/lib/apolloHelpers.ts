import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { resolvers, typeDefs } from "./localResolvers"

const cache = new InMemoryCache()
const link = new HttpLink({ uri: "http://localhost:4000/api" })
const client = new ApolloClient({ cache, link, typeDefs, resolvers })
cache.writeData({
  data: {
    counter: 0,
    tasks: [
      { id: 1, label: "Some task here", done: false, __typename: "Task" },
      { id: 2, label: "Il fait si beau aujourd'hui", done: false, __typename: "Task" },
      { id: 3, label: "Ah ok ok ok!", done: true, __typename: "Task" },
      { id: 4, label: "Correction immediate, je ne vous connais pas", done: false, __typename: "Task" },
      { id: 5, label: "Like a rolling stone", done: true, __typename: "Task" },
    ],
  },
})

export const getClient = () => client
