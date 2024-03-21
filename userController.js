const UserModel = require('./UserModel');

async function registerUser(email, password) {
    try {
        const user = new UserModel({ email, password });
        await user.save();
        return { success: true, message: "User added successfully" };
    } catch (err) {
        console.error(err);
        return { success: false, error: "Internal server error" };
    }
}

module.exports = { registerUser };
