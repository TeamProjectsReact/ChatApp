const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')


const authController = {
    SignUp: async (req, res) => {
        const {
            username,
            email, 
            password
        } = req.body

        // console.log(req.body)

        const checkUser = await User.findOne({ email: email, username: username})

        if(checkUser){
            return res.json({ Error: "User already exists...."})
        }
        else{
            const passHash = await bcrypt.hash(password, 10);

            if(passHash){
                
            }
            else{
                return  res.json({ Error: "Error while Hashing Password"})
            }
        }

    },

    SignIn: async (req, res) => {

    }
}

module.exports = authController