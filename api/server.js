const express = require("express");

// const accountsRouter = require("./accounts/accounts-router")

const server = express();

server.use(express.json());

// server.use("/api/accounts", accountsRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: "Hello World!"});
});

server.use((err, req, res, next) => {
  console.log(err)

  res.status(500).json({
    message: "Something went wrong, please try again"
  })
})

module.exports = server;
