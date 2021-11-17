const express = require('express')
const router = express.Router() 
const User = require('../models/mongoose_users')

router.route('/users')
.get(async (req, res) => {
  try {
    const result = await User.find().exec()

    res.json(result)

} catch (e) {
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }

    res.status(500).json(response)
}
})

.post(async (req, res) => {
   
  try {
    let userData = req.body

    const toCreateUser = new User(userData)
    
    const result = await toCreateUser.save()

    res.status(201).json(result)

  }catch(e){
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message}

    res.status(500).json(response)
  }
})


router.route('/users/:userId')
.get(async(req, res) => {
  try {
   
   const userId = req.params.userId
   const foundUser = await User.findById(userId).exec()
    
   if(!foundUser){
        res.status(404).json({result: `El producto con id ${userId} no existe`})
      }
    
      res.json(foundUser)
      
    } catch (e) {
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }

    res.status(500).json(response)
    }
})
.post((req, res) => {
   
    res.send('POST enviado a la página de users/id con verbo POST')
})
.delete(async(req, res) => {
  
  const userId = req.params.userId

  const deletedUser = await User.findOneAndDelete({_id: req.params.userId}).exec()
  res.status(204).json(null)

  if(!deletedUser){
    res.status(404).json({result: `El producto   con id ${userId} que intentas borrar no existe, inténtalo más tarde`})
    return
  }
})


router.route('/users/:userId/verifications')
.put(async(req, res) => {

  try {

    const userId = req.params.userId
    let userData = req.body
  
    const updatedUser = await User.findOneAndUpdate({_id: req.params.userId}, userData, {new:true}).exec()
    res.status(201).json(updatedUser)

    if(!updatedUser){
      res.status(404).json({result: `El usuario con id ${userId} no existe`})
      return
    }

    res.json(updatedUser)

   } catch (e) {
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }
  
    res.status(500).json(response)
   }
})

module.exports = router
