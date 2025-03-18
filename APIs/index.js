/**
 * @title RMA
 * @version 0.0.1
 * @author Taylor Fuller
 * @published 3/17/2025
 * @modified 3/17/2025
 * @description Restaurant Menu APIs
 */

//Loading dependencies
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { types, resolvers } = require("./model")
const { log } = require("./libs/history")
require("dotenv").config()  //Initate to read .env

// Initialize Apollo Server
const run = async () => {
  const app = express() //Http server
  const server = new ApolloServer({ typeDefs: types, resolvers })  //GraphQL server

  await server.start()  //Running GraphQL server
  server.applyMiddleware({ app }) //Apply GrphQL server into http
  app.listen(process.env.APP_PORT,
    () => log(`Server running at http://localhost:${process.env.APP_PORT}${server.graphqlPath}`))
}

run() //Running server