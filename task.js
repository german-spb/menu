const arrayLinks = document.querySelectorAll('.menu__link')
for (let i of arrayLinks){
    i.onclick = () => {
        if (i.nextElementSibling != null){  
                if(i.nextElementSibling.classList.contains('menu_sub')){
                    i.nextElementSibling.classList.toggle('menu_active')
                }
                return false
            }
    }
}   
