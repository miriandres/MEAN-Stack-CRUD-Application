const { check } = require('express-validator')

const valid_user = [
    check('nombre', 'El nombre indicado debe tener al menos 3 caracteres y no puede incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('apellidos', 'Los apellidos indicados debe tener al menos 3 caracteres y no pueden incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('edad', 'La edad indicada debe estar comprendida entre 0 y 125')
        .isFloat({ min: 0, max: 125 }),
    check('dni', 'El dni indicado debe contener 9 caracteres alfanuméricos')
        .isLength({ min: 9, max: 9 })
        .isAlphanumeric(),
    check('cumple', 'El cumpleaños indicado debe especificarse en formato aaaa-mm-dd')
        .isISO8601(),
    check('colorFav', 'El color favorito indicado debe tener al menos 3 caracteres y no puede incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('sexo', 'El sexo indicado debe ser uno de los siguientes: Hombre, Mujer, Otro, No especificado')
        .isIn(['hombre', 'mujer', 'otro', 'no-especificado'])
]

module.exports = valid_user