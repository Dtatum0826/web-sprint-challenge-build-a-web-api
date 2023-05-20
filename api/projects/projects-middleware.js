// add middlewares here related to projects
const Projects = require('./projects-model')

async function validateProjectId(req,res,next){
    try{
        const project = await Projects.get(req.params.id)
        if(!project){
            res.status(404).json({
                message : "project not found"
            })
        } else {
            req.project = project
            next()
        }

    } catch (err){ 
res.status(500)({
    message: "error getting project"
})
    }
    console.log('validate projectId middleware')
}


function validateProject(req, res, next) {
    const { name, description, completed } = req.body;

    if (typeof name !== 'string' || typeof description !== 'string' || typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'Invalid project format' });
    }
  else{
    next();
  }
   
  }console.log('validateProject middleware')
  


module.exports = {
    validateProjectId,
    validateProject
}