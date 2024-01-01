"use strict";
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
module.exports = async (bot) => {
    const client = new MongoClient(process.env.DATABASE_URL, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();
    bot.db = client.db("main");
}