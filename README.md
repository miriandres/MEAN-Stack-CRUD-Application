![Demo](demo.gif)

# MEAN Stack CRUD Application
Proyecto final del Curso de Desarrollo Full-Stack de Samsung DesArrolladoras, impartido por Bejob y con certificación académica de la Fundación General de la Universidad de Alcalá (FGUA).

## Requisitos del proyecto
Se creará una interfaz con Angular para realizar peticiones y una API desarrollada con Express para listar, crear, editar y eliminar contactos. Deberá usarse Angular Material para la maquetación. A la hora de crear o editar una persona será necesario realizar las siguientes validaciones sobre los parámetros:

* `Nombre:` no puede incluir números y la longitud debe ser superior a 3.
* `Apellidos:` no puede incluir números y la longitud debe ser superior a 3.
* `Edad:` número comprendido entre 0 y 125.
* `DNI:` cadena alfanumérica de 9 caracteres.
* `Cumpleaños:` fecha en formato ISO8601.
* `ColorFavorito:` no puede incluir números y la longitud debe ser superior a 3.
* `Sexo:` cadena de texto comprendida en la siguiente lista: Hombre, Mujer, Otro, No especificado.
* El funcionamiento de la API se puede comprobar con la aplicación `Postman`, al igual que se describió en la nota técnica.

## Autor ✒️
**Miriam Andrés** - *Documentación y Código*
* [Website](https://miriamandres.com)
* [Github](https://github.com/miriandres)
* [LinkedIn](www.linkedin.com/in/miriandres)

## Construido con 🛠️
[![Angular](https://img.shields.io/static/v1?label=&message=Angular&color=DD0031&logo=angular&logoColor=white&style=for-the-badge)](https://angular.io/)
[![Angular](https://img.shields.io/static/v1?label=&message=Angular%20Material&color=3f51b5&logo=angular&logoColor=white&style=for-the-badge)](https://material.angular.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![SASS](https://img.shields.io/static/v1?label=&message=SASS&color=CC6699&logo=sass&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![TypeScript](https://img.shields.io/static/v1?label=&message=TypeScript&color=3178C6&logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![NodeJS](https://img.shields.io/static/v1?label=&message=NodeJS&color=339933&logo=nodedotjs&logoColor=white&style=for-the-badge)](https://nodejs.org/en/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)](https://www.postman.com/)
[![BEM Methodology](https://img.shields.io/static/v1?label=&message=BEM%20Methodology&color=17A1E6&logo=bem&logoColor=white&style=for-the-badge)](http://getbem.com/)

## Instalación
### Requisitos previos
* Descargar e instalar [NodeJS](https://nodejs.org/en/download/)
* Descargar e instalar [MongoDB](https://www.mongodb.com/)

### Clonar repositorio
```
$ git clone https://github.com/miriandres/MEAN-Stack-CRUD-Application.git
$ cd MEAN-Stack-CRUD-Application 
```
### Ejecutar la aplicación en Angular
```
$ cd frontend
$ npm install
$ ng serve
```

### Iniciar el servidor
```
$ cd server
$ npm install
$ npm run dev 
```

## Probando la aplicación en Postman

|        RUTA          |       HTTP        |      Descripción           | 
|--------------------- | ----------------- | -------------------------- | 
|/api/users            |       GET         | Mostrar lista de usuarios  | 
|/api/user             |       POST        | Crear nuevo usuario        | 
|/api/user/:id         |       GET         | Seleccionar usuario por id | 
|/api/user/:id         |       PUT         | Actualizar usuario por id  |    
|/api/user/:id         |       DELETE      | Eliminar usuario por id    |

## Mejoras
- [x] Añadir sistema de filter, sort y pagination
- [x] Actualizar a versión Angular 13

## Contratación
Si quieres contratarme puedes escribirme a hello@miriamandres.com para consultas.

## Licencia 📄
MIT Public License v3.0
No puede usarse comercialmente.