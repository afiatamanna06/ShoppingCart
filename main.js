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
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector('.cart span').textContent = productNumbers;
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }

}

onLoadCartNumbers();