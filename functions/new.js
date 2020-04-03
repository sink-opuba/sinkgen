require("dotenv").config();
const faunadb = require("faunadb");
const shortid = require("shortid");
const axios = require("axios");
const querystring = require("querystring");

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB
});

module.exports.handler = async event => {
  const data = querystring.parse(event.body);
  const uniquePath = shortid.generate();
  data.path = uniquePath;

  try {
    const queryResponse = await client.query(
      q.Create(q.Collection("page"), {
        data: data
      })
    );
    const response = {
      statusCode: 200,
      body: JSON.stringify(queryResponse)
    };
    return response;
  } catch (error) {
    const errorResponse = {
      statusCode: 400,
      body: JSON.stringify(error)
    };
    return errorResponse;
  }
};
