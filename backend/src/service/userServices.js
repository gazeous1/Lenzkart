var userModel = require('../models/userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
        var userModelData = new userModel();
        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = encryptor.encrypt(userDetails.password);

        userModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                console.error(error);
                reject(false);
            });
    });
}
// module.exports.loginUserDBService = (loginDetails) => {
//     return new Promise((resolve, reject) => {
//         var userModelData = new userModel();
//         userModelData.email = loginDetails.email;

//         userModelData.findOne({ email: loginDetails.email }, function (error, user) {
//             if (error) {
//                 reject({ status: false, msg: "Invalid Data" });
//             } else {
//                 if (user != undefined && user != null) {
//                     // Assuming decrypt function is available in encryptor
//                     var decryptedPassword = encryptor.decrypt(user.password);

//                     // Compare decrypted password with entered password
//                     if (decryptedPassword === loginDetails.password) {
//                         resolve({ status: true, msg: "User Validate Successfully" });
//                     } else {
//                         reject({ status: false, msg: "Invalid User" });
//                     }
//                 } else {
//                     reject({ status: false, msg: "Invalid Data" });
//                 }
//             }
//         });
//     });
// }

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
