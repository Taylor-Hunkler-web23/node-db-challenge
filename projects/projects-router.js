const express = require('express');

const projects = require('./projects-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    projects.get()
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



module.exports = router;