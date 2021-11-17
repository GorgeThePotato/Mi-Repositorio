const express = require('express')
const router = express.Router() 
const { uuid } = require('uuidv4');
const Product = require('../models/mongoose_products')

let products = []

router.route('/products')
.get(async (req, res) => {
    try {
      const result = await Product.find().sort({brand: 'ASC', name: 'DESC'}).exec()
  
      res.json(result)
  
  } catch (e) {
      let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }
  
      res.status(500).json(response)
  }
  })
.post(async (req, res) => {
   
  try {
    let productData = req.body

    const toCreateProduct = new Product(productData)
    
    const result = await toCreateProduct.save()

    res.status(201).json(result)

  }catch(e){
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message}

    res.status(500).json(response)
  }
  //   try {
//     let productData = req.body

//     if (!productData.hasOwnProperty('created_at')) {
//         productData.created_at = new Date()
//     }

//     if (!productData.hasOwnProperty('enabled')) {
//         productData.enabled = false
//     }

//     if (!productData.hasOwnProperty('discontinued')) {
//         productData.discontinued = false
//     }

//     //find tendrá el objeto encontrado o valor null si no lo encuentra
//     const foundProduct = products.find((product) => {
//         return product.brand === productData.brand && product.code === productData.code
//     })

//     if (foundProduct) {
//         res.status(409).json({ result: `El producto con código ${productData.code} y marca ${productData.brand} ya existe con el identificador ${foundProduct.id}` })
//         return
//     }

//     /*
//     findIndex tendrá un valor entre 0 y array.length-1 o el valor -1 si no encuentra el elemento en el array
//     const foundIndex = products.findIndex((product) => {
//         return product.brand === productData.brand && product.code === productData.code
//     */

//     productData.id = uuid()

//     products.push(productData)
//     console.info(products)

//     //hola
//     res.status(201).json(productData)
// } catch (e) {
//     let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }

//     res.status(500).json(response)
// }
// })
})

  

router.route('/products/:productId')
.get(async(req, res) => {
  try {
   
   const productId = req.params.productId
   const foundProduct = await Product.findById(productId).exec()
    
   if(!foundProduct){
        res.status(404).json({result: `El producto con id ${productId} no existe`})
      }
    
      res.json(foundProduct)
      
    } catch (e) {
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }

    res.status(500).json(response)
    //   const productId = req.params.productId

//   const foundProduct = products.find((product) => {
//     return product.id === productId
//   })
  
//   if(!foundProduct){
//     res.status(404).json({result: `El producto con id ${productId} no existe`})
//   }

//   res.json(foundProduct)
// })
}
}) 

.post((req, res) => {
   
    res.send('POST enviado a la página de productos/id con verbo POST')
})
.put(async(req, res) => {

  try {

    const productId = req.params.productId
    let productData = req.body
  
    const updatedProduct = await Product.findOneAndUpdate({_id: req.params.productId}, productData, {new:true}).exec()
    res.status(201).json(newProduct)

    if(!updatedProduct){
      res.status(404).json({result: `El producto con id ${productId} no existe`})
      return
    }

    res.json(updatedProduct)

   } catch (e) {
    let response = { result: 'Se ha producido un error durante el procesamiento de la petición', message: e.message }
  
    res.status(500).json(response)
   }
  // let foundProduct = products.find((product) => {
  //   return product.id === productId
  // })
  

  // delete productData.id

  // // spread operator
  // console.info(foundProduct)
  // foundProduct = {...foundProduct,...productData}
  // foundProduct.updated_at = new Date
  // console.info(foundProduct)

  // // foundProduct.name = productData.name

  // let foundIndex = products.findIndex((product) => {
  //   return product.id === productId
  // })

  // if(!foundIndex === -1){
  //   res.status(500).json({result: `No se ha podido actualizar el producto con id ${productId}, inténtalo más tarde`})
  //   return
  // }

  // products[foundIndex] = foundProduct
  

  // res.json(foundProduct)

})
.delete(async(req, res) => {

  const productId = req.params.productId

  const deletedProduct = await Product.findOneAndDelete({_id: req.params.productId}).exec()
  res.status(204).json(null)

  if(!deletedProduct){
    res.status(404).json({result: `El producto   con id ${productId} que intentas borrar no existe, inténtalo más tarde`})
    return
  }
  
  // const foundIndex = products.findIndex((product) => {
  //   return product.id === productId
  // })

  

  // products.splice(foundIndex, 1)

  // res.status(204).json(null)
})

module.exports = router
