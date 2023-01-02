import Task from "../models/Task.mjs";

class TaskController{
    
    static createTask(req, res){
        res.render('tasks/create')
    }

}

export default TaskController