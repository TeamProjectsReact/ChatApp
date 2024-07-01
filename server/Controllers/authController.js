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

        console.log(req.body)

    },

    SignIn: async (req, res) => {

    }
}

module.exports = authController