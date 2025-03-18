/**
 * @title QraphQL schema & Resolver
 * @version 0.0.1
 * @author Taylor Fuller
 * @published 3/17/2025
 * @modified 3/17/2025
 */

const { gql } = require("apollo-server-express")  //Loading GraphQL type dependancy
const data = require("./seed")

//Schema of GraphQL
const types = gql`
  type MenuItem {
    name: String!
    description: String!
    price: Float!
  }

  type Sandwich {
    name: String!
    type: String!
    description: String!
    price: Float!
  }

  type Query {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwiches: [Sandwich]
    salads: [MenuItem]
    tacos: [MenuItem]
  }`

//Resolvers(Query) of GraphQL
const resolvers = {
  Query: {
    appetizers: () => data.appetizers,
    entrees: () => data.entrees,
    sandwiches: () => data.sandwiches,
    salads: () => data.salads,
    tacos: () => data.tacos,
  },
}

module.exports = {
  types,
  resolvers,
}