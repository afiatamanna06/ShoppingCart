let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    localStorage.setItem("cartNumbers", 1);
}