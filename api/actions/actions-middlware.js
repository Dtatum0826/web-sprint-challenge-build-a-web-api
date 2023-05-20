// add middlewares here related to actions

const Actions = require('./actions-model')

function validateActionId(req,res,next){
    const actionId = req.params.id

    Actions.get(actionId)
    .then(action =>{
        if(action){
            req.action = action
            next()
        }else{
            res.status(404).json({
                message:'Action not found'
            })
        }
    }) .catch(next)
}

function validateNewAction(req,res,next){
    const {description, notes, completed, project_id} = req.body

    if(!description || !notes || completed === undefined || !project_id){
        res.status(400).json({
            message: 'All fields required'
        })
    } else {
        next()
    }
}

module.exports = {validateActionId, validateNewAction}