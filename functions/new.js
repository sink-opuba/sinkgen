require("dotenv").config();
const faunadb = require("faunadb");
const shortid = require("shortid");
const axios = require("axios");
const querystring = require("querystring");

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB
});
