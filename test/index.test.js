/**
 * @title Test script - RMA
 * @version 0.0.1
 * @author Taylor Fuller
 * @published 3/17/2025
 * @modified 3/17/2025
 * @description Test methdos to verify get API datas
 */

//Load dependencies
const request = require("supertest")
const { ApolloServer } = require("apollo-server-express")
const express = require("express")
const { types, resolvers } = require("../model") // Adjust path as needed

// Set up the ApolloServer
let app, server

// Test: Verify GraphQL query for appetizers
beforeAll(async () => {
  app = express()  //Http server
  server = new ApolloServer({ typeDefs: types, resolvers })  //GraphQL server

  await server.start()  //Running GraphQL server
  server.applyMiddleware({ app }) //Apply http server into GraphQL
})

afterAll(() => { server.stop() }) //Stop test road map after all done

// Test: Verify GraphQL query for appetizers
test("GET /graphql - should return appetizers",
  async () => {
    const query = `
    query {
      appetizers {
        name
        description
        price
      }
    }
  `;

    const response = await request(app)
      .post("/graphql")
      .send({ query })
      .expect(200)

    expect(response.body.data.appetizers).toBeInstanceOf(Array)
    expect(response.body.data.appetizers.length).toBeGreaterThan(0)
    expect(response.body.data.appetizers[0]).toHaveProperty("name")
    expect(response.body.data.appetizers[0]).toHaveProperty("description")
    expect(response.body.data.appetizers[0]).toHaveProperty("price")
  })

// Test: Verify GraphQL query for entrees
test("GET /graphql - should return entrees", async () => {
  const query = `
    query {
      entrees {
        name
        description
        price
      }
    }
  `;

  const response = await request(app)
    .post("/graphql")
    .send({ query })
    .expect(200);

  expect(response.body.data.entrees).toBeInstanceOf(Array);
  expect(response.body.data.entrees.length).toBeGreaterThan(0);
  expect(response.body.data.entrees[0]).toHaveProperty("name");
  expect(response.body.data.entrees[0]).toHaveProperty("description");
  expect(response.body.data.entrees[0]).toHaveProperty("price");
});

// Test: Verify GraphQL query for sandwiches
test("GET /graphql - should return sandwiches", async () => {
  const query = `
    query {
      sandwiches {
        name
        type
        description
        price
      }
    }
  `;

  const response = await request(app)
    .post("/graphql")
    .send({ query })
    .expect(200);

  expect(response.body.data.sandwiches).toBeInstanceOf(Array);
  expect(response.body.data.sandwiches.length).toBeGreaterThan(0);
  expect(response.body.data.sandwiches[0]).toHaveProperty("name");
  expect(response.body.data.sandwiches[0]).toHaveProperty("type");
  expect(response.body.data.sandwiches[0]).toHaveProperty("description");
  expect(response.body.data.sandwiches[0]).toHaveProperty("price");
});

// Test: Verify GraphQL query for salads
test("GET /graphql - should return salads", async () => {
  const query = `
    query {
      salads {
        name
        description
        price
      }
    }
  `;

  const response = await request(app)
    .post("/graphql")
    .send({ query })
    .expect(200);

  expect(response.body.data.salads).toBeInstanceOf(Array);
  expect(response.body.data.salads.length).toBeGreaterThan(0);
  expect(response.body.data.salads[0]).toHaveProperty("name");
  expect(response.body.data.salads[0]).toHaveProperty("description");
  expect(response.body.data.salads[0]).toHaveProperty("price");
});

// Test: Verify GraphQL query for tacos
test("GET /graphql - should return tacos", async () => {
  const query = `
    query {
      tacos {
        name
        description
        price
      }
    }
  `;

  const response = await request(app)
    .post("/graphql")
    .send({ query })
    .expect(200);

  expect(response.body.data.tacos).toBeInstanceOf(Array);
  expect(response.body.data.tacos.length).toBeGreaterThan(0);
  expect(response.body.data.tacos[0]).toHaveProperty("name");
  expect(response.body.data.tacos[0]).toHaveProperty("description");
  expect(response.body.data.tacos[0]).toHaveProperty("price");
});