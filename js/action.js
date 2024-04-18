const devices = document.querySelectorAll('.device-item')

devices.forEach(item => {
        item.addEventListener('click', ()=>{
                devices.forEach(item => {item.classList.remove('device-item--active')})
                item.classList.add('device-item--active')
        })
})








