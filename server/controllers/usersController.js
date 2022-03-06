const User                 = require('../models/User')
const { validationResult } = require('express-validator')

// Obtener listado users
const getUser = async ( req, res )=> {

    try {
        const users = await User.find()
        res.json( users )
    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error')
    }
}

// Crear nuevo user
const newUser = async ( req, res )=> {
    const errors = validationResult(req)
    const nuevoUser = new User( req.body)

    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    try {
        await nuevoUser.save() 
        res.json( { mensaje : "Usuario creado"} )
    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error')
    }
}

// Actualizar user
const updateUser = async ( req, res )=> {
    const errors = validationResult(req)
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body)
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    res.json({ status: "Usuario actualizado" })
}

// Borrar user
const deleteUser = async ( req, res )=> {
    const userDeleted = await User.findByIdAndDelete(req.params.id)
    res.json({ status: "Usuario eliminado" })
}

// Buscar user
const findUser = async ( req, res )=> {
    const user = await User.findById(req.params.id)
    res.send(user)
}

module.exports = {
    getUser,
    newUser,
    updateUser,
    deleteUser,
    findUser
}