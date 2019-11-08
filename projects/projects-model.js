
const db = require('../data/seeds/db-config.js')

module.exports ={
    getprojects,
    addprojects
   
 }

 function getprojects () {
    return db("projects")
   
   
}

function addprojects (project) {
    return db("projects")
    .insert(project)
   
   
}