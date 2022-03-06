const { Schema, model }  = require('mongoose')

const UserSchema = new Schema({
    nombre    : { type: String },
    apellidos : { type: String },
    edad      : { type: Number },
    dni       : { type: String },
    cumple    : { type: String },
    colorFav  : { type: String },
    sexo      : { type: String }
}, { 
    timestamps: true,
    versionKey: false
})

const User = model('user', UserSchema)

module.exports = User