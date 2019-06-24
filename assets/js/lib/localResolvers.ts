import gql from "graphql-tag"

export const typeDefs = gql`
  type Task {
    id: ID!
    label: String!
    done: Boolean!
  }

  type TaskGroup {
    id: ID!
    label: String!
    tasks: [Task]!
  }

  extend type Query {
    counter: Number!
    taskGroups: [TaskGroup]!
  }

  extend type Mutation {
    increaseCounter(id: ID!): Number!
  }
`

const READ_COUNTER_QUERY = gql`
  query {
    counter @client
  }
`

export const resolvers = {
  Mutation: {
    increaseCounter: (_, { id }, { cache }) => {
      const { counter } = cache.readQuery({ query: READ_COUNTER_QUERY })
      const data = { counter: counter + 1 }
      cache.writeQuery({ query: READ_COUNTER_QUERY, data })
      return data.counter
    },
  },
}
