var iconeMenuLateral = document.querySelector(".iconeMenuLateral"); //icone do menu lateral

iconeMenuLateral.addEventListener("click", function() { //evento click do icone do menu lateral
    boxMenuLateral = document.querySelector(".menu-lateral-show").classList.toggle("show"); //adicionando ao menu lateral as propriedades da classe .show
    console.log('click is working....')
});

function onLoad() {
    var destaque = document.querySelector('.active');
    var todos = document.querySelector('.inactive');
    console.log('carregou!!')

    destaque.style.borderBottom = "3px solid #25B7BA";
    todos.style.border = "none";

    todos.addEventListener('click', function() {
        console.log('clicou');
        todos.style.borderBottom = "3px solid #25B7BA";
        destaque.style.border = "none";

    });

    destaque.addEventListener('click', function() {
        destaque.style.borderBottom = "3px solid #25B7BA";
        todos.style.border = "none";

    });
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}