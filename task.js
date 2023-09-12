const a = document.querySelectorAll('.menu__link')
for (let i of a){
    i.onclick = () => {
        if (i.nextElementSibling != null){  
                if(i.nextElementSibling.classList.contains('menu_sub')){
                    i.nextElementSibling.classList.toggle('menu_active')
                    
                }
                return false;
            }
    }
}   
