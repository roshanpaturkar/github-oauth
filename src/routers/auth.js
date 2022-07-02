const express = require('express')
const axios = require('axios')


const router = new express.Router()

router.get('/auth', (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`)
})

router.get('/oauth-callback', ({ query: { code } }, response) => {
    const body = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.SECRET,
        code
    }

    const options = { headers: { accept: 'application/json' } }
    axios.post('https://github.com/login/oauth/access_token', body, options)
    .then((token) => {
      console.log('User token:', token.data);

      response.redirect(`/?token=${token.data.access_token}`);
    })
    .catch((error) => response.status(500).send({ error: error.message }));
})

module.exports = router