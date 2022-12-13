const TodoModel = require('../models/todo')
const { where } = require('sequelize')

module.exports = {

    server : async (req, res) => {
    const todo = await TodoModel.findAll()
    res.status(200).json({
        data: todo,
        metadata: "successfully get data"
    })
},
    show : async (req, res) => {
    const id=req.params.id
    const { title, description, parameter, date} = req.body
    const todo = await TodoModel.findByPk(id)

    if (todo){
        const todos = await todo.update({title, description, parameter, date})
        
        return res.json({
            status: 200,
            data: todos,
            metadata: ""
    })
}else{return res.status(400).json({message : 'data viled'})}
    
},
    store : async (req, res) => {
    const { title, description, parameter, date} = req.body

    const todo = await TodoModel.create({
        title, description, parameter, date
    })
    res.status(200).json({
        data: todo,
        metadata: "successfully created"
    })
},
    update : async (req, res) => {
    const id=req.params.id
    const { title, description, parameter, date } = req.body
    const todo = await TodoModel.findByPk(id)

    if (todo){
        const todos = await todo.update({})
        
        return res.json({
            status: 200,
            data: todos,
            metadata: "successfully updated"
    })
}else{
    return res.status(400).json
    ({message : 'data cannot be updated'})}
    
},


    junk : async (req, res) => {
    const id=req.params.id
    const todo = await TodoModel.findByPk(id)

    if (!todo){
        return res.status(400).json({
            message: "data not found"
        })
    }else{
        await todo.destroy()
        return res.json({
            status: 200,
            message: "successfully deleted"
        });
    }
}
}