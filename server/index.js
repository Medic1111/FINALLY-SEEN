// GENERAL REQUIRES

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const app = express();

// GENERAL MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DEV TESTING ROUTES HERE:

app.post("/api/v1/login", (req, res) => {
  const { username, password } = req.body;
  const mockUsers = ["medic1111", "john", "brent", "lordson"];
  const correctPass = "111111";

  // THIS IS THE FIRST CHECK:

  if (!username || !password) {
    return res.status(422).json({ message: "All fields are required" });
  }

  // HERE WE USE MOCK DATA, BUT IT WILL BE A SEARCH ON DB
  // IF SEARCH FAILS:

  if (!mockUsers.includes(username)) {
    return res.status(404).json({ message: "User not found" });
  }

  // IF SEARCH DOESNT FAIL, WE BCRYPT COMPARE PASSWORD
  // IF COMPARISON FAILS:

  if (password !== correctPass) {
    return res.status(403).json({ message: "Wrong password" });
  }

  // IF ALL CHECKS, USER CAN BE LOGGED IN:

  res.status(200).json({ message: "Logging user" });

  // USE THE AUTH.REST FILE TO SEND REQUESTS AND OBSERVE
  // RESPONSE. THAT WILL BE THE FIRST LINE OF TESTING
});

app.get("/api", (req, res) =>
  res.status(200).json({ message: "Hello from server" })
);

// UNIVERSAL ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
