const express = require('express')
const app = express()
const passport = require('./library/passport')
const router = require('./routers/router')
const {port = 3000} = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())

app.use(router)

app.listen(port, () => console.log(`Running on your http://localhost:${port}`))