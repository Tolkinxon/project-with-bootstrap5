const eldevices = document.querySelectorAll('.device-item')

eldevices.forEach(item => {
        item.addEventListener('mousedown', ()=>{
                eldevices.forEach(item => {item.classList.remove('device-item--active')})
                item.classList.add('device-item--active')
        })
})







//tooltip side
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})








