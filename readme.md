
# Restaurant Menu API (RMA)

## Overview
The **Restaurant Menu API (RMA)** is a GraphQL-based API that provides menu data for various categories such as appetizers, entrees, sandwiches, salads, and tacos. It is built using **Apollo Server** with **Express.js** and can be easily tested using **Jest**.

This project allows users to query for menu data with GraphQL, and the responses include details such as the name, description, and price of each item.

## Table of Contents
- [Installation](#installation)
- [File Structure](#file-structure)
- [Starting the Server](#starting-the-server)
- [Running Tests](#running-tests)
- [GraphQL Queries](#graphql-queries)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/rma.git
```

2. Navigate to the project directory:

```bash
cd rma
```

3. Install dependencies:

```bash
npm install
```

## File Structure

The project has the following directory structure:

```
rma/
├── node_modules/         # Project dependencies (generated after npm install)
├── test/                 # Test files
│   └── index.test.js     # Test file for GraphQL queries
├── model/                # Data model
│   └── index.js          # Menu data and GraphQL types and resolvers
│   └── seed.js           # Data in a Menu
├── package.json          # Project metadata and scripts
├── index.js              # Server entry point
├── .env                  # Environment variables (optional)
└── README.md             # Project documentation
```

### Key Files:
- **`index.js`**: The entry point of the server. It initializes the Express app, sets up ApolloServer with GraphQL schema, and applies middleware.
- **`test/index.test.js`**: Contains Jest tests to validate the GraphQL queries.
- **`model/index.js`**: Contains the GraphQL types and resolvers.
- **`model/seed.js`**: Contains menu data.

## Starting the Server

To run the server in development mode using **Nodemon**, which automatically restarts on file changes:

```bash
npm run dev
```

This will start the server on `http://localhost:21413/graphql`, where you can interact with the GraphQL API.

Alternatively, to start the server in production mode:

```bash
npm start
```

## Running Tests

To run the tests for verifying GraphQL queries and API responses, use the following command:

```bash
npm run test
```

This will run **Jest** and execute the tests in the `test/index.test.js` file, verifying that the server returns the expected data for all menu categories (appetizers, entrees, sandwiches, salads, tacos).

### Test Details:
- The tests validate that the data returned for each menu category is an array.
- Each menu item is verified to have the properties `name`, `description`, and `price`.

## GraphQL Queries

The API supports the following GraphQL queries:

### 1. **Get Appetizers**

```graphql
query {
  appetizers {
    name
    description
    price
  }
}
```

### 2. **Get Entrees**

```graphql
query {
  entrees {
    name
    description
    price
  }
}
```

### 3. **Get Sandwiches**

```graphql
query {
  sandwiches {
    name
    description
    price
  }
}
```

### 4. **Get Salads**

```graphql
query {
  salads {
    name
    description
    price
  }
}
```

### 5. **Get Tacos**

```graphql
query {
  tacos {
    name
    description
    price
  }
}
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
