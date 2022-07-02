const express = require('express')
require('dotenv').config();

const authRouter = require('./routers/auth')


const app = express()
const port = process.env.PORT | 3000

app.get('/', (request, response) => {
    response.send('Welcome to Github authorization server!')
})

app.use(express.json())
app.use(authRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
