const express = require('express');
const server = express();


const cors = require('cors')




const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')


server.use(express.json())
server.use(cors())

server.use('/api/projects', projectsRouter)

server.use('/api/actions', actionsRouter)







server.get('/home',(req,res) => {
res.send(`<h1>Back-End Development in Progress</h1>`)
})

module.exports = server;
