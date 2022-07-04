// imports
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    
    const newUser = await User.create({
        username: username,
        password: hashed
    })
    return newUser._doc;
}

// READ a user
async function login(username, password) {
    const user = await getUser(username);
    if (!user) throw Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw Error('Incorrect password');
    return user._doc;
}

// UPDATE user info
async function updatePassword(id, password) {
    const hashed = hashPassword(password);
    const user = await User.updateOne({"_id": id}, {$set: { password: hashed }});
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