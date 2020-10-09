const express = require('express');
const helmet = require('helmet');
const dbFun = require('./dbAccessFunctions.js');

const server = express();
server.use(helmet());
server.use(express.json());

//CRUD
//Create
server.post("/api/project", (req, res) => {
    dbFun.addProject(req.body)
    .then( dbRes => {
        res.status(201).json(dbRes)
    })
    .catch( dbErr => {
        res.status(500).json(dbErr)
    })
})

//Read
server.get("/api/project", (req, res) => {
    dbFun.getProjects()
    .then( dbRes => {
        res.status(201).json(dbRes)
    })
    .catch( dbErr => {
        res.status(500).json(dbErr)
    })
})

server.get("/", (req, res) => {
    res.status(200).json({hello: "Hello World" });
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`API running on port ${PORT}`));