const express = require('express')
const cors = require('cors')


const server = express()

const projectsRouter = require('./api/projects/projects-router')

server.use(express.json())
server.use(cors())

server.use('/api/projects', projectsRouter)









server.get('/home',(req,res) => {
res.send(`<h1>Back-End Development in Progress</h1>`)
})

module.exports = server