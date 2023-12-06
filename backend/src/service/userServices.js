var userModel = require('../models/userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {
    console.log("Received user details in createUserDBService:", userDetails);

    return new Promise((resolve, reject) => {
        try {
            var userModelData = new userModel();
            userModelData.firstname = userDetails.firstname;
            userModelData.lastname = userDetails.lastname;
            userModelData.email = userDetails.email;
            userModelData.password = encryptor.encrypt(userDetails.password);

            userModelData.save()
                .then(result => {
                    console.log("User saved successfully:", result);
                    resolve(true);
                })
                .catch(error => {
                    console.error("Error saving user:", error);
                    reject(false);
                });
        } catch (error) {
            console.error("Unexpected error in createUserDBService:", error);
            reject(false);
        }
    });
};

module.exports.loginUserDBService = async (loginDetails) => {
    try {
        const user = await userModel.findOne({ email: loginDetails.email }).exec();

        if (!user) {
            throw new Error("User not found");
        }

        var decryptedPassword = encryptor.decrypt(user.password);

        if (decryptedPassword === loginDetails.password) {
            return { status: true, msg: "User validated successfully" };
        } else {
            throw new Error("Invalid password");
        }
    } catch (error) {
        throw new Error("Error in login process: " + error.message);
    }
};



module.exports.getUserDBService = async (userId) => {
    try {
        const user = await userModel.findById(userId).exec();

        if (!user) {
            throw new Error("User not found");
        }

        return { status: true, user };
    } catch (error) {
        throw new Error("Error in retrieving user: " + error.message);
    }
};

module.exports.deleteUserDBService = async (userId) => {
    try {
        const user = await userModel.findByIdAndDelete(userId).exec();

        if (!user) {
            throw new Error("User not found");
        }

        console.log("Deleted User:", user);

        return { status: true, message: "User deleted successfully" };
    } catch (error) {
        throw new Error("Error in deleting user: " + error.message);
    }
};

module.exports.updateUserDBService = async (userId, updatedUserDetails) => {
    try {
        const user = await userModel.findByIdAndUpdate(userId, updatedUserDetails, { new: true }).exec();

        if (!user) {
            throw new Error("User not found");
        }

        console.log("Updated User:", user);

        return { status: true, message: "User updated successfully" };
    } catch (error) {
        throw new Error("Error in updating user: " + error.message);
    }
};

module.exports.getAllUsersDBService = async () => {
    try {
        const users = await userModel.find().exec();

        return { status: true, users };
    } catch (error) {
        throw new Error("Error in retrieving all users: " + error.message);
    }
};
