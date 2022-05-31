require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (request, resolve) => {
    console.log('Petición recibida')

    resolve.status(200).send('Hola mundo')
})

const PORT = process.env.PORT

 app.listen(PORT, () => {
     console.log(`Servidor escuchando en el puerto ${ PORT }`)
 })

