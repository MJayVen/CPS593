// imports
const express = require("express");
const User = require('../models/user');

const router = express.Router();

// create routes to access database
router
    .post('/login', async (req, res) => { // POST instead of GET to protect password
        try {
            const user = await User.login(req.body.username, req.body.password);
            res.send({...user, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .post('/register', async (req, res) => {
        try {
            const user = await User.register(req.body.username, req.body.password);
            res.send({...user, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .put('/update', async (req, res) => {
        try {
            const user = await User.updatePassword(req.body.id, req.body.password);
            res.send({...user, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await User.deleteUser(req.body.id);
            res.send({ success: "User deleted!" })
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    });

// export router for use in index.js
module.exports = router;