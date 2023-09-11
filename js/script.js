// variable
let dropdown = document.getElementById('menu_dropdown');
let notif = document.getElementById('notification');

notif.addEventListener('click', ()=>{
    dropdown.style.display==='block' ? dropdown.style.display='none' : dropdown.style.display='block';
})

var http = XMLHttpRequest();
