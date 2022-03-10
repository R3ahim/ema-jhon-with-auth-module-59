const displayLoaclaStrageCart = () =>{
const cart = getCart()
 for(const name in cart){
     displayProduct(name)
 }

};



const addItem = () =>{
    const nameField = document.getElementById("product-name");
 const name = nameField.value;
 if(!name){
     return
 }
//  display in ui ;


displayProduct(name)


//  add to local Storage

addProductToCart(name)

 nameField.value = ''
}


const displayProduct = name =>{
    const ul  = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObject;
    if(cart){
        cartObject = JSON.parse(cart);
    }
    else{
        cartObject = {};
    }
    return cartObject; 
}

const addProductToCart = name =>{
    const cart = getCart();
    if(cart[name]){
    cart[name] =  cart[name] + 1;
    }
    else{
       cart[name] = 1
    }
    const cartstringFied = JSON.stringify(cart);
    localStorage.setItem('cart',cartstringFied)
}

const placeOrder = () =>{
document.getElementById('products').textContent = '';
localStorage.removeItem('cart'); 
}


displayLoaclaStrageCart();



