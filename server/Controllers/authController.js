const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const authController = {
    SignUp: async (req, res) => {
        try{
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
                    const UserNew = new User({
                        username: username,
                        email: email,
                        password: passHash,
                        Role: 'User'
                    })
    
                    const ResultUser = UserNew.save()
    
                    if(ResultUser){
                        return res.json({ Status: "Success" })
                    }
                    else{
                        return res.json({ Error: "Error White Inserting User to database"})
                    }
                }
                else{
                    return  res.json({ Error: "Error while Hashing Password"})
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    },

    SignIn: async (req, res) => {
        try{
            const { email, password } = req.body;

            const checUser = await User.findOne({ email })

            if(checUser) {
                const checkPass = await bcrypt.compare(password, checUser.password)

                if(checkPass){
                    // create a token for login
                    const token = jwt.sign({ userId: checUser._id, userEmail: checUser.email, userRole: checUser.Role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    
                    return res.json({Msg: "Success", Token:token, Result: checUser})    
                }
                else{
                    return res.json({ Error: "Password is not Match..." })
                }
            }
            else{
                return res.json({ Error: "No user Found..."})
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = authController