
const db = require('../data/seeds/db-config.js')

module.exports ={
    getprojects,
    addprojects,
    getresources,
    addresources,
    gettasks
   
 }

 function getprojects () {
    return db("projects")
   
   
}

function addprojects (project) {
    return db("projects")
    .insert(project)
   
   
}


function getresources () {
    return db("resources")
   
   
}

function addresources (resource) {
    return db("resources")
    .insert(resource)
   
   
}


function gettasks () {
    return db("tasks")
    .select({project_name:"projects.name", project_description:"projects.description", task_description:"tasks.description",})
   
    .join("projects", "tasks.projects_id", "=", "projects.id")
   
   
}


function gettasksbyid (id) {
    return db("tasks")
    .select({project_name:"projects.name", project_description:"projects.description", task_description:"tasks.description",})
   
    .join("projects", "tasks.projects_id", "=", "projects.id")
    .where("tasks.projects_id", "=", id)
   
   
}

// select projects.name, projects.description, * from tasks
// join projects on tasks.projects_id = projects.id;