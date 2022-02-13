// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch')
const REBUILD_URL = process.env.REBUILD


const handler = async (event) => {
  console.log("Received event:", event)
  await fetch(REBUILD_URL, {method: 'POST'});

  return{
    statusCode: 200,
  };
}

module.exports = { handler }


module.exports.handler = schedule("@daily", handler);