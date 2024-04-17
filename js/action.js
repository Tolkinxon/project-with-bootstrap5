
const elConvertButton = document.querySelector('.conver-btn ')
const elInput = document.querySelector('.input')
const elSelect = document.querySelector('.select-currency')
const elH1 = document.querySelector('.response-text')

const ONE_USD = 12300
const ONE_RUB = 45600
const ONE_GBR = 78900





elConvertButton.addEventListener('click', () => {
    
const inputValue = +elInput.value

    let result = elSelect.value === 'USD' ? ONE_USD * inputValue :
                 elSelect.value === 'RUB' ? ONE_RUB * inputValue :
                 elSelect.value === 'GBR' ? ONE_GBR * inputValue :
                 'Something went wrong'

    elH1.textContent = inputValue + ' ' + elSelect.value + ' will be convert ' + result + " UZS"
})