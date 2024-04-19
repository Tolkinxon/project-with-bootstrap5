const eldevices = document.querySelectorAll('.device-item')
const wrapper = document.querySelector('.wrapper')

eldevices.forEach(item => {
        item.addEventListener('mousedown', ()=>{
                eldevices.forEach(item => {item.classList.remove('device-item--active')})
                item.classList.add('device-item--active')

                const deviceName = item.children[0].id;

                console.log(deviceName);

                if(deviceName === "desktop" ){
                        wrapper.style.width = '100%'
                }
                else if(deviceName === "tablet" ){
                        wrapper.style.width = '768px'
                }
                else if(deviceName === "mobile" ){
                        wrapper.style.width = '375px'
                }
                else {
                        console.log('something went wrong');
                }
        })
})







//tooltip side
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



//dropdown side
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})








