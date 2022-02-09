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
  let total = 0;
  
  function load() {
  const cartData = localStorage.getItem('cart');
  cart = JSON.parse(cartData);

  cart.forEach((i)=> {
    let item = document.createElement('div');
  
    item.innerHTML = `
    <div class="product">
    <img src="IMG/${products[i].image}">
    <p class="name">${products[i].name}</p>
    <p class="price">${products[i].price}</p>
    <button class="remove">Izbaci iz korpe</button>
    </div>
    `
   const items = document.getElementById('items');
   item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
     remove(i, e)
    
   
  });
  items.append(item)
  });
  tot()
  }
  load();
  
  function tot(){
      cart.forEach((i)=>{
       total += products[i].price
      });
      document.getElementById('total').innerText = total;
  }


  function remove(i, e){
      for (let j = 0; j < cart.length; j++){
          if(cart[j] === i){
              cart.splice(j, 1)
          }
      
      }
  localStorage.setItem('cart',JSON.stringify(cart));

  e.target.parentElement.remove();
  tot();
  alert(`${products[i].name} je izbacena iz korpu`);

  }