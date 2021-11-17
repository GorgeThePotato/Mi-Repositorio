const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({

    name:  {type: String, required:true, minlength: [2,'El nombre debe tener más de dos caracteres'], maxlength: 100},
    code: {type: String, required:true, minlength: [2,'El nombre debe tener más de dos caracteres'], maxlength: 20},
    images:[
       {
         type: String,
         required: false,
         minlength: 3,
         maxlength:1000
        },
    ],
    categories:[
      {
        type: String,
        required: true,
        minlength: 3,
        maxlength:100,
      }
    ],
    brand:  {type: String, required:true, minlength: [2,'La marca debe tener más de dos caracteres'], maxlength: 100},
    description:{type: String, required:true, minlength: [2,'La descripción del producto debe ser más larga.']},
    cost: {type: Number, required: true, min: 0.1},
    stock: {
      current: {type:Number, required: true, min: 0}, 
      min: {type: Number, default: 0, min: 0}, 
      max: {type: Number, deafault: 0, min: 0}
    },
    enabled:{type: Boolean, deafault: false},
    price: {type: Number, required: () => { return this.enabled }, min:0.1},
    discontinued: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
    location: {
      aisle:  {type: String, required:true}, 
      rack: {type: String, required:true}, 
      shelf: {type: String, required:true}
    }   
})

module.exports = new mongoose.model('products', productSchema)
