const db               = require('./db')
const express          = require('express')
const cors             = require('cors')
const app              = express()
const PORT             = 5000


const usersRouter      = require('./routes/users')

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/', usersRouter)

// Configuramos el servidor
app.listen( PORT , ()=>{
    console.log('Servidor corriendo')
})

// http://localhost:5000/users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
})
// http://localhost:5000/user con DATOS en Body de POSTMAN
app.post('/user', async (req, res) => {
    const nuevoUsuario = new User(req.body)
    await nuevoUsuario.save()
    res.send({ message: "Usuario creado" })
})

// http://localhost:5000/user/60ab5e4b249c080e27bb0ea8
app.put('/user/:id', async (req, res) => {
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: "Usuario actualizado" })
})

// http://localhost:5000/user/60ab5e4b249c080e27bb0ea8
app.delete('/user/:id', async (req, res) => {
    const userDeleted = await User.findByIdAndDelete(req.params.id)
    res.json({ status: "Usuario eliminado" })
})

// http://localhost:5000/user/60a2103040e5eb679ed6a31e
app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})