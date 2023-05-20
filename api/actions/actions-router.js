// Write your "actions" router here!
const express = require('express')

const Actions = require('./actions-model')

const router = express.Router()
const {validateActionId,validateNewAction} = require('./actions-middlware')

router.get('/',(req,res,next)=>{
    Actions.get()
    .then(actions =>{
      if(actions.length > 0){
        res.json(actions)
      }else{
        res.json([])
      }
    }).catch(next)
})


router.get('/:id', validateActionId, (req,res,)=>{
    res.json(req.action)
})

router.post('/', validateNewAction,(req,res,next)=>{
    const {description, notes, completed, project_id} = req.body
    Actions.insert({description,notes,completed,project_id})
    .then(newAction =>{
        res.status(201).json(newAction)
    })
    .catch(next)
})

router.put('/:id', validateActionId,validateNewAction, (req,res,next)=>{
    const {description, notes, completed, project_id} = req.body
    Actions.update(req.params.id,{description,notes,completed,project_id})
        .then(updatedAction => {
            res.json(updatedAction)
        })
        .catch(next)
})


router.delete('/:id',validateActionId, async (req,res,next)=>{
    try{
const deleted = await Actions.remove(req.params.id) //eslint-disable-line
const deletedAction = Actions.get(req.params.id)
res.json(deletedAction)
    } catch(err){
next(err)
    }
})






module.exports = router