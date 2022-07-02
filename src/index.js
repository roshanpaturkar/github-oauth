const express = require('express')


const app = express()
const port = process.env.PORT | 3000

app.get('/', (request, response) => {
    response.send('Welcome to Github authorization server!')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
