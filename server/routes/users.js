const express          = require('express')
const router           = express.Router()
const users_controller = require('../controllers/usersController')
const valid_user       = require('../validation/UserValidation')

router.get('/users', users_controller.getUser)

router.post('/user', valid_user, users_controller.newUser)

router.put('/user/:id', valid_user, users_controller.updateUser)

router.delete('/user/:id', users_controller.deleteUser)

router.get('/user/:id', users_controller.findUser)

module.exports = router