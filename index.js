const tracer = require('dd-trace').init()
const environment = 'development';    // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);

const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
	console.log('request recd')

  // disconnected pg spans
  var info = await database('example_knex_bug').where({ message: 'rowValue1' }).first()

  // connected pg spans
  // var info = await database('example_knex_bug').where({ message: 'rowValue1' }).first().then(x => x)
  
  console.log('info is', info)

  res.send(`Hello World! info: ${info.message}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))