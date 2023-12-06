const userService = require('../service/userServices');


var createUserControllerFn = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        var status = await userService.createUserDBService(req.body);
        console.log("Status from userService:", status);

        if (status) {
            res.send({ "status": true, "message": "User Created Successfully" });
        } else {
            res.send({ "status": false, "message": "Error Creating User" });
        }
    } catch (error) {
        console.error("Error in createUserControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};


var loginUserControllerFn = async (req, res) => {

    try {
        console.log(req.body);
        var status = await userService.loginUserDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": status.msg });
        } else {
            res.send({ "status": false, "message": status.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}



const getUserControllerFn = async (req, res) => {
    try {
        const userId = req.params.userId;
        const status = await userService.getUserDBService(userId);

        if (status) {
            res.send({ "status": true, "user": status.user });
        } else {
            res.send({ "status": false, "message": "Error retrieving user" });
        }
    } catch (error) {
        console.error("Error in getUserControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};

const deleteUserControllerFn = async (req, res) => {
    try {
        const userId = req.params.userId;
        const status = await userService.deleteUserDBService(userId);

        if (status) {
            res.send({ "status": true, "message": "User deleted successfully" });
        } else {
            res.send({ "status": false, "message": "Error deleting user" });
        }
    } catch (error) {
        console.error("Error in deleteUserControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};

const updateUserControllerFn = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedUserDetails = req.body;
        const status = await userService.updateUserDBService(userId, updatedUserDetails);

        if (status) {
            res.send({ "status": true, "message": "User updated successfully" });
        } else {
            res.send({ "status": false, "message": "Error updating user" });
        }
    } catch (error) {
        console.error("Error in updateUserControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};

const getAllUsersControllerFn = async (req, res) => {
    try {
        const status = await userService.getAllUsersDBService();

        if (status) {
            res.send({ "status": true, "users": status.users });
        } else {
            res.send({ "status": false, "message": "Error retrieving all users" });
        }
    } catch (error) {
        console.error("Error in getAllUsersControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};



module.exports = { 
    createUserControllerFn, 
    loginUserControllerFn ,  
    getUserControllerFn,
    deleteUserControllerFn,
    updateUserControllerFn,
    getAllUsersControllerFn,
};