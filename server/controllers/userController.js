const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({ _id: _id }, 'kmenkdsnwtpjsnekubxkpvhhldohtxizdpbsuomc', { expiresIn: '3d' })
}

//login user
const loginUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await User.login(name, email, password)

        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    // res.json({ mssg: 'login user' })
}

//signup user
const signupUser = async (req, res) => {
    const { name, email, password } = req.body


    try {
        const user = await User.signup(name, email, password)

        const token = createToken(user._id)
        console.log(token)
        res.status(200).json({ email, token })

    } catch (error) {
        res.status(400).json({ error: error.message })

    }


    // res.json({ mssg: 'signup user' })
}

module.exports = { signupUser, loginUser }