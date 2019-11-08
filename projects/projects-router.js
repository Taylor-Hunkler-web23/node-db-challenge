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




module.exports = router;