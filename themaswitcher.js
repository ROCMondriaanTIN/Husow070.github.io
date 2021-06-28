const themeswitcher = document.querySelectorAll('.theme-switcher');
const body = document.querySelector('body');
const table = document.querySelector(".table");

themeswitcher.forEach(function(theme){
    theme.addEventListener('click', function(e){
        if (e.target.id === 'dark'){
            body.style.backgroundColor= '#212121';
            body.style.color =  '#777';
            table.style.backgroundColor= '#212121';
            table.style.color =  '#777';
        }
        if (e.target.id === 'light'){
            body.style.backgroundColor= '#fff';
            body.style.color =  '#000';
            table.style.backgroundColor= '#fff';
            table.style.color =  '#000';
        }
    })
})