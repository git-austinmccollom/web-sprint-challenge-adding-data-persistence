const db = require('./database/connection.js');

module.exports = {
    addProject,
    addResource,
    addTask,
    addProjectResource,
    getResources,
    getProjects,
    getTasks
}

//CRUD
//Create
function addProject(project) {
    return db('project').insert(project)
}

function addResource(resource) {
    return db('resource').insert(resource)
}

function addTask(task) {
    return db('task').insert(task)
}

function addProjectResource(association) {
    return db('project_resource').insert(association)
}

//Read
function getProjects() {
    return db('project')
}

function getResources() {
    return db('resource')
}

function getTasks() {
    return db('task').join('project', 'task.project_id', '=', 'project.id')
}