const express = require("express")

const app = express()

// rota raiz
app.get('/', (request, response) => {
  response.send('dnajdnajkdn')
}) 

app.listen(3001)