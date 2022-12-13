const UserModel = require('../models/users')
const { where } = require('sequelize')
const bcrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')

module.exports = {

show_all : async (req, res) => {
    const user = await UserModel.findAll()
    res.status(200).json({
        data: user,
        metadata: "successfully get data"
    })
},


   show : async (req, res) => {
    const id=req.params.id
    const { title, description, parameter, date} = req.body
    const user = await UserModel.findByPk(id)

    if (user){
        const users = await user.update({title, description, parameter, date})

        return res.json({
            status: 200,
            data: users,
            metadata: "data successfully get"
    })
}else{
    return res.status(400).json(
        {message : 'data viled'}
        
        )}

},



server : async (req, res) => {
    const { email, nama, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    const users = await UserModel.create({
        email, nama, password: encryptedPassword
    })
    res.status(200).json({
        data: users,
        metadata: "succesfully add user"
    })
},

update: async (req, res) => {
    // email, nama, password ->>>>>>>>>>>>>>> BE nangkep
    const id=req.params.id
    const { email, nama, password, passwordBaru } = req.body
    const check = await passwordCheck(email, password)
    const encryptedPassword = await bcrypt.hash(passwordBaru, 10)

    if (check.compare === true) {
        const users = await UserModel.update({
            nama, password: encryptedPassword
        }, { where: { id: id, email: email } })

        res.status(200).json({
            users: { updated: users[0] },
            email,
            nama,
            password,
            metadata: "user updated! "
        })
    } else {
        res.status(400).json({
            error: "data invalid"
        })
    }
},

junk : async (req, res) => {
    const { email, nama, password } = req.body

    const check = await passwordCheck(email, password)

    if (check.compare === true) {
        res.status(200).json({
            users: check.userData,
            metadata: "succesfully login"
        })
    } else {
        res.status(400).json({
            error: "data invalid"
        })
    }
},

login_info : async (req, res) => {
    const users = await UserModel.findOne()
    if (users === null) {
        res.status(400).json({
            error: "data invalid"
        })
    } else {
        res.status(200).json({
            data: users,
            metadata: "user login successs"

        })
    }

}
}
