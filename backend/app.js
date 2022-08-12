const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
app.use(express.static('public'))
app.set('view engine', 'react')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Home!'))
app.get('/login', (req, res) => res.send('Login!'))
app.get('/register', (req, res) => res.send('Register!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
