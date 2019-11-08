const express = require('express');

const projects = require('./projects-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    projects.getprojects()
    .then(projects => {
        const comp = projects.map( project =>{
            if (project.completed){
                return {...project, completed:true};
            } else {
                return {...project, completed :false};
            }
        });
      res.status(200).json(comp);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });



  router.post('/', (req, res) => {
    projects.addprojects(req.body)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add project' });
    });
  });


  router.get('/resources', (req, res) => {
    projects.getresources()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resource' });
    });
  });

  
  router.post('/resources', (req, res) => {
    projects.addresources(req.body)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add resources' });
    });
  });


  
router.post('/tasks', (req, res) => {
    projects.addtasks(req.body)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add tasks' });
    });
  });



  router.get('/tasks', (req, res) => {
    projects.gettasks()
    .then(tasks => {
        const comp = tasks.map( task =>{
            if (tasks.completed){
                return {...task, completed:true};
            } else {
                return {...task, completed :false};
            }
        });
      res.status(200).json(comp);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });


  function gettasks (id) {
    return db("tasks")
    .select({project_name:"projects.name", project_description:"projects.description", task_description:"tasks.description",})
   
    .join("projects", "tasks.projects_id", "=", "projects.id")
    .where("tasks.projects_id", "=", id)
   
   
}


router.get('/tasksall', (req, res) => {
    projects.getalltasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get all tasks' });
    });
  });

  

  router.get('/:id/tasks', (req, res) => {
      const {id} =req.params;

    projects.gettasksbyid(id)
    .then(tasks => {
        const comp = tasks.map( task =>{
            if (tasks.completed){
                return {...task, completed:true};
            } else {
                return {...task, completed :false};
            }
        });
      res.status(200).json(comp);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

module.exports = router;