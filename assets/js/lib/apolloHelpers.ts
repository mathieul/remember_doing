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
  },
})

export const getClient = () => client
