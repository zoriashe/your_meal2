let productDescription = document.querySelector(".modal_product");
let delivery = document.querySelector(".modal_delivery");

let openProductBtn = document.querySelector(".product__detail");
let openDeliveryBtn = document.querySelector(".order__submit");

let closeProductDescriptionBtn = document.getElementById("closeDescriptionBtn");
let closeDeliveryBtn = document.getElementById("closeDeliveryBtn");

openProductBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    productDescription.classList.add('modal_open');
});

openDeliveryBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    delivery.classList.add('modal_open');
});

closeProductDescriptionBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    productDescription.classList.remove('modal_open');
});

closeDeliveryBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    delivery.classList.remove('modal_open');
});

console.log(openProductBtn);