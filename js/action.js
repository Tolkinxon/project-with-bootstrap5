const devices = document.querySelectorAll('.bg-device')

window.addEventListener('click', (e)=> {

    const selectedEl = e.target.nodeName

    devices.forEach(item => {
        if(selectedEl === "LI" || selectedEl === "IMG"){
            item.classList.add('bg-device--active') 
        }
        else {
            item.classList.remove('bg-device--active') 
        }
    })


})






