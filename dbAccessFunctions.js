const db = require('./database/connection.js');

module.exports = {
    addProject,
    addResource,
    getResources,
    getProjects
}

//CRUD
//Create
function addProject(project) {
    return db('project').insert(project)
}

function addResource(resource) {
    return db('resource').insert(resource)
}

//Read
function getProjects() {
    return db('project')
}

function getResources() {
    return db('resource')
}