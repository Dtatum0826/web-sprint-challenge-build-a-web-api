// Write your "projects" router here!
const express= require('express');

const Projects = require('./projects-model')

const{validateProjectId, validateProject} = require('./projects-middleware')

const router = express.Router()


router.get('/', (req,res,next) =>{
    Projects.get()
    .then(projects =>{
        if(!projects){
            res.json([])   
             } else {
                res.json(projects)
             }
       
    })
    .catch(next)
})


router.get('/:id', validateProjectId,(req,res)=>{
    res.json(req.project)
})

router.post('/', validateProject, (req,res,next)=>{
 const {name,description} = req.body
 Projects.insert({name,description})
 .then(newProject =>{
    res.status(201).json(newProject)
 })
 .catch(next)
})

router.put('/:id', validateProjectId,validateProject,(req,res,next)=>{
    const {name,description} = req.body
    Projects.update(req.params.id,{name,description})
    .then(updatedProject =>{
        res.json(updatedProject)
    })
    .catch(next)
})




module.exports = router