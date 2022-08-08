const radioList = document.querySelector('.radioList')

document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:5000/radios')
    .then(response=>response.json())
    .then(radios=>{
   
        radios.map((radio,index)=>{
            console.log(radio)
            radioList.innerHTML+=`<li class="list-group-item bg-black text-light">
            <img src="${radio.logo}" class="w-25 mx-2"   />
            ${radio.name}
            </li>`
        })
    })
})