
const db = require('../data/seeds/db-config.js')

module.exports ={
    getprojects,
    addprojects,
    getresources,
    addresources
   
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

