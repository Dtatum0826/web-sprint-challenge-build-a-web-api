const express = require('express')

const server = express()

const projectsRouter = require('./api/projects/projects-router')

server.use(express.json())

server.use('/api/porjects', projectsRouter)









server.get('/home',(req,res) => {
res.send(`<h1>Back-End Development in Progress</h1>`)
})

module.exports = server