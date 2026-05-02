const storeProduct = [
  'Trailmakers'
  ,'Scrap Mechanic'
  , 'Minecraft'
  , 'Among Us'
  , 'Marvel Rivals'
  , 'Call of Duty 2'
  , 'R.E.P.O.'
  , 'PEAK'
  , 'Palworld'
  , 'FORTNITE'
]

storeProductImg = [
  ''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
]
storeProductImg = ["https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/trailmakers.jpg?raw=true", 
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/scrapmechanic.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/minecraft.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/among_us.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/marvel_rivals.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/call_of_duty_2.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/repo.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/peak.jpg?raw=true",
                   "https://github.com/EmmanuelY13/Emmanuel-s-Game-Store/blob/main/images/palworld.jpg?raw=true"];


let userProfile= {
  firstName: 'John-Emmanuel',
  lastName: 'Yao',
  age: '14',
  location: 'Minnasota',
  favoriteFoods: ['Confetti Cake', 'Candy', 'Fanta', 'Pizza'],
};

let storeInventory = [
  

  {
  name: 'Trailmakers',
  colors: ['White', 'blue', 'yellow'],
  price: 24.99,
  description: 'A complex vechile sandbox game where you can build anything.',
  image: storeProductImg[0]
},

  {
  name: 'Scrap Mechanic',
  colors: ['black', 'yellow', 'red'],
  price: 19.99,
  description: 'A simple vechile sandbox game where you can build anything.',
  image: storeProductImg[1]
},
  {
  name: 'Minecraft',
  colors: ['green', 'blue', 'gray'],
  price: 19.99,
  description: 'A cubic survial sandbox game.',
  image: storeProductImg[2]
},
  {
  name: 'Among Us',
  colors: ['red','green','blue'],
  price: 5.00,
  description: 'A game about trust and deseption.',
  image: storeProductImg[3]
},
  {
  name: 'Marvel Rivals',
  colors: ['white'],
  price: 0.00,
  description:'A team battle game where you need to LOCK IN.',
  image: storeProductImg[4]
},
  { name: 'Call of Duty 2',
  colors: ['black'],
  price: 19.99,
  description:'a shooter game based on war.',
  image: storeProductImg[5]},
  { 
  name: 'R.E.P.O.',
  colors: ['red'],
  price: 9.99,
  description:'IDK what tis game is about, just have fun.',
  image: storeProductImg[6]},
  {
  name:'PEAK',
  colors: ['white', 'gray'],
  price:7.99,
  descrition:'A climbing game where you need to climb to the TOP.',
  image: storeProductImg[7]},
  {
  name: 'Palworld',
  colors:['red','white','black'],
  price: 29.99,
  description: 'A pokemon game but with GUNZ.',
  image: storeProductImg[8]
  }
  
 ];

// Cart stored as an array
var cart = [];

// Build the product grid
for (var i = 0; i < storeInventory.length; i++) {
  document.getElementById("product").innerHTML +=
    "<div class='productnode'>" +
      "<img src='" + storeInventory[i].image + "'><br>" +
      storeInventory[i].name + "<br>" +
      "$" + storeInventory[i].price + "<br>" +
      "<button class='rounded-button' onclick='addToCart(" + i + ")'>Add to Cart</button>" +
    "</div>";
}

// Add item to cart or increase quantity if already there
function addToCart(index) {
  var item = storeInventory[index];
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name == item.name) {
      cart[i].quantity = cart[i].quantity + 1;
      found = true;
    }

  }
  if (found == false) {
    cart.push({ name: item.name, price: item.price, image: item.image, quantity: 1 });
  }
  updateCart();
}

// Increase quantity
function increaseItem(index) {
  cart[index].quantity = cart[index].quantity + 1;
  updateCart();
}

// Decrease quantity or remove if it hits zero
function decreaseItem(index) {
  cart[index].quantity = cart[index].quantity - 1;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);

  }
  updateCart();
}

// Remove item completely
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Rebuild the cart display
function updateCart() {
  var total = 0;
  var itemsHTML = "";
  for (var i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].quantity);

    itemsHTML +=
      "<div class='cartnode'>" +
        "<img src='" + cart[i].image + "'>" +
        "<div class='cart-item-info'>" +
          "<div class='cart-item-name'>" + cart[i].name + "</div>" +
          "<div class='cart-item-price'>$" + cart[i].price + "</div>" +
          "<div class='cart-item-controls'>" +
            "<button onclick='decreaseItem(" + i + ")'>-</button>" +
            "<span>" + cart[i].quantity + "</span>" +
            "<button onclick='increaseItem(" + i + ")'>+</button>" +
            "<button class='delete-btn' onclick='removeItem(" + i + ")'>&#128465;</button>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  document.getElementById("cart").innerHTML =
    "<div class='cart-title'>Customer Order</div>" +
    "<div class='cart-total-box'>" +
      "<div class='cart-total-label'>Order total</div>" +
      "<div class='cart-total-amount'>$" + total.toFixed(2) + "</div>" +
    "</div>" +
    itemsHTML;
}
