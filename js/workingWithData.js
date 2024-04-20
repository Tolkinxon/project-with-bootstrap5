import data from "./db.js";

const elCartList = document.querySelector('.list-of-cards__list')
let elCartItem = ''

data.forEach(item => {

    let star = ``

    console.log(item.productStar);

   for(let i = 0; i < item.productStar; i++){
    star += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
   }

  let  CartItem  = 
`      
<li class="list-of-cards__item list-unstyled col p-0">
    <div class="list-of-cards__item-child m-3 rounded-2  border d-flex flex-column align-items-center justify-content-between" style="min-height: 400px !important;">
        <div class=" position-relative bg-light-gray text-light-gray d-flex align-items-center justify-content-center fs-5 w-100 mb-4" style="height: 200px;">
            450X300
            <span class="d-${item.productSale ? 'block' : 'none'} position-absolute top-0 end-0 mt-2 me-2 badge c bg-dark">Sale</span>
        </div>
        <div style="min-height: 100px; height: 100%;">
            <h3 class="h5 fw-bold text-center">
                ${item.productName}
            </h3>
            <div class="mb-2 text-center">${star}</div>
            <p class="text-center">
                <del class="me-1 text-secondary">${item.productDiscount}</del>${item.productCost}
            </p>
        </div>
        
        <button class="btn btn-outline-dark mb-4">
                ${item.buttonName}
        </button>
    </div>
</li>`
   elCartItem += CartItem;
   star = ''
})

elCartList.innerHTML = elCartItem

