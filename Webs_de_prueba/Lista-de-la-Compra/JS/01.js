// VARIABLES QUE RELACIONAN EL JS CON LOS ID DEL HTML
const itemList = document.getElementById('list')
const total_qty = document.getElementById('total_qty')
const addForm = document.getElementById('main_form')
const itemName = document.getElementById('item-name')


addForm.onsubmit = function (event) {
  event.preventDefault()
  console.log(event)
  const name = itemName.value
  addItem (name)
}

itemList.onclick = function(event){
  console.log("Clicked list")
  if (event.target && event.target.classList.contains('remove')) {
    const name = event.target.dataset.name
    removeItem(name)
  } 
   else if (event.target && event.target.classList.contains('add-one')) {
    const name = event.target.dataset.name
    addItem(name)
}
   else if (event.target && event.target.classList.contains('remove-one')) {
  const name = event.target.dataset.name
  removeItem(name, 1)
}
}


// EL CARRITO, CON LAS FUNCIONES DE AÑADIR-ELIMNAR-CANTIDAD Y LISTAR
const cart = []

function addItem (name) {
  for (let i = 0; i< cart.length; i++){
    if (cart[i].name === name) {
      cart[i].qty += 1
      listItem()
      return
    }
  }
  const item = {name, qty: 1}
  cart.push(item)
  listItem()
}

function removeItem (name, qty = 0) {
  for (let i = 0; i<cart.length; i++){
    if(cart[i].name === name){
      if (qty > 0){
        cart[i].qty -= 1
      }
      if (cart[i].qty < 1 || qty === 0){
       cart.splice(i, 1)
      }
      listItem()
      return
    }
  }
}

function totalQty(){
  let qty = 0
  for (let i = 0; i < cart.length; i++) {
    qty += cart[i].qty
  }
  return qty
}

function listItem (){
  total_qty.innerHTML = `Tienes ${totalQty()} productos`

  let itemStr = ''
  for (let i = 0; i < cart.length; i++){
    const {name, qty} = cart[i]
    
    itemStr += `<li> 
    <span>
    ${cart[i].name} x ${cart[i].qty} 
    </span>
    <span>
    <button class="remove" data-name="${name}">Eliminar</button>
    <button class="add-one" data-name="${name}"> + </button>
    <button class="remove-one" data-name="${name}"> - </button>
    </span>
    </li>`
  }
  itemList.innerHTML = itemStr
}
