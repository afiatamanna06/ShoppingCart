let carts = document.querySelectorAll(".add-cart");

let products = [{
        name: "Long Dress",
        tag: "long_dress",
        price: 18,
        inCart: 0
    },
    {
        name: "Ladies Shoe",
        tag: "ladies_shoe",
        price: 30,
        inCart: 0
    },
    {
        name: "Ladies Coat",
        tag: "ladies_coat",
        price: 65,
        inCart: 0
    },
    {
        name: "Ladies Pant",
        tag: "ladies_pant",
        price: 35,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector('.cart span').textContent = productNumbers;
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }

    }

    product.inCart = 1;

    cartItems = {
        [product.tag]: product
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("The product price is", product.price);

    let cartCost = localStorage.getItem('totalCost');

    console.log(cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
    }
}

onLoadCartNumbers();
displayCart();