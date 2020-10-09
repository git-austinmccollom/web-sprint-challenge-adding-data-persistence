const db = require('./database/connection.js');

module.exports = {
    addProject,
    getProjects
}

//CRUD
//Create
function addProject(project) {
    return db('project').insert(project)
}

function getProjects() {
    return db('project')
}