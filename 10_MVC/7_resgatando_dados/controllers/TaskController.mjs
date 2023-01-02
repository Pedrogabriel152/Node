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

}

export default TaskController