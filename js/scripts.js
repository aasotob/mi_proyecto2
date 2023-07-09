jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu= $('.menu ul');
    
        menuBtn.click(function() {

            if(menu.hasClass('show')) {
                menu.removeClass('show');
            }else {
                menu.addClass('show');
            }
        })

        document.getElementById("menu").addEventListener("click", function(){
            menu.removeClass('show');
           // document.getElementById("navega").classList.toggle("mostrar");
        });
        
});

