const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productController = require('./controllers/products')
const userController = require('./controllers/users')

app.use(express.json())

app.use(productController)
app.use(userController)

if(process.env.NODE_ENV !== 'production'){
const dotenv = require('dotenv')
dotenv.config()
}
const PORT = process.env.PORT || 8080

app.get('/', (req,res) =>{
  res.json({result:'Respuesta desde el servidor'})
})

app.listen(PORT, () =>{
  console.info(`El servidor está funcionando en http://localhost:${PORT}`)
})

connectToDB()

async function connectToDB(){
    try{
      await mongoose.connect(process.env.CONN_STR, {useNewUrlParser: true})
      console.info('Conectado a MONGO ATLAS')
    }catch(e){
      console.error('error conectando a la base de datos')
  }
}
