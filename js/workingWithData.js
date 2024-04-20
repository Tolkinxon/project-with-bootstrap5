import data from "./db.js";

const elCartList = document.querySelector('.list-of-cards__list')
let elCartItem = ''

data.forEach(item => {
  let  CartItem  = 
`      
<li class="list-of-cards__item list-unstyled col p-0">
    <div class="list-of-cards__item-child m-3 rounded-2  border d-flex flex-column align-items-center justify-content-between" style="min-height: 400px !important;">
        <div class=" bg-light-gray text-light-gray d-flex align-items-center justify-content-center fs-5 w-100 mb-4" style="height: 200px;">
            450X300
        </div>
        <div class="" style="min-height: 100px; height: 100%;">
            <h3 class="h5 fw-bold text-center">
                ${item.productName}
            </h3>
            
            <p class="text-center">
                ${item.productCost}
            </p>
        </div>
        
        <button class="btn btn-outline-dark mb-4">
                ${item.buttonName}
        </button>
    </div>
</li>`
console.log('hello');
   elCartItem += CartItem;
})

console.log(elCartItem);
elCartList.innerHTML = elCartItem

