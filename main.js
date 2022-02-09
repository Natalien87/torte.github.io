let products = [
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
  {name: "torte",image:"shop.jpg",price:1500},
];
let cart = []

function load() {
products.forEach((i, index)=> {
  let item = document.createElement('div');

  item.innerHTML = `
  <div class="product">
  <img src="IMG/${i.image}">
  <p class="name">${i.name}</p>
  <p class="price">${i.price}</p>
  <button class="add">Ubaci u korpu</button>
  </div>
  `
 const items = document.getElementById('items');
 item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
   addTocart(index)
  
 
});
items.append(item)
});
}
load();

function addTocart(index){
cart.push(index);
localStorage.setItem('cart',JSON.stringify(cart));
alert(`${products[index].name} je ubacena u korpu`);
}