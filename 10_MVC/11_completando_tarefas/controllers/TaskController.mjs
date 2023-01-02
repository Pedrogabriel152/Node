import Task from "../models/Task.mjs";

class TaskController{
    
    static createTask(req, res){
        res.render('tasks/create')
    }

    static createTaskSave(req, res){
        
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        Task.create(task)
        .then(() =>{
            res.redirect('/tasks')
        })
        .catch(err => console.log(err))

    }

    static async showTasks(req, res){

        const tasks = await Task.findAll({ raw: true })

        res.render('tasks/all', { tasks })
    }

    static removeTask(req, res){

        const id = req.body.id

        Task.destroy( { where: { id: id } })
        .then(() => res.redirect('/tasks'))
        .catch(err => console.log(err))
        
    }

    static async updateTask(req, res){

        const id = req.params.id

        const task = await Task.findOne({raw: true, where: { id: id } })

        res.render('tasks/edit', { task })
    }

    static updateTaskSave(req, res){

        const id = req.body.id
        
        const task = {
            title: req.body.title,
            description: req.body.description
        }

        Task.update(task, {where: {id: id}})
        .then(() => res.redirect('/tasks'))
        .catch(err => console.log(err))

    }

    static toggleTaskStatus(req, res){

        const id = req.body.id

        const task ={
            done: req.body.done === '0' ? true : false
        }

        Task.update(task, {where: {id: id}})
        .then(() => res.redirect('/tasks'))
        .catch(err => console.log(err))
    }

}

export default TaskController