// import mongoose
const mongoose = require("mongoose");


// Schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    followers: [String],
    following: [String]
});


// Model of schema
const User = mongoose.model("User", userSchema);


// CRUD functions of model
// CREATE a user
async function register(username, password) {
    const user = await getUser(username);
    if (user) throw Error('Username already used');
    const newUser = await User.create({
        username: username,
        password: password
    })
    return newUser;
}

// READ a user
async function login(username, password) {
    const user = await getUser(username);
    if (!user) throw Error('User not found');
    if (user.password != password) throw Error('Incorrect password');
    return user;
}

// UPDATE user info
async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: { password: password }});
    return user;
}

// DELETE user
async function deleteUser(id) {
    await User.deleteOne({"_id": id});
}

// utility functions
async function getUser(username) { 
    return await User.findOne({ "username" : username});
}

// export all functions necessary for route file
module.exports = {register, login, updatePassword, deleteUser};