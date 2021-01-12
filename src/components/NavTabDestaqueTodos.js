import React from 'react';
import "../css/index.css";

export const NavTabDestaqueTodos = () => {

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

    return (
        <div>
            <div class="box-info-fundos">
                <a href="#home" className="active">Destaques</a>
                <a href="#news" className="inactive">Todos</a>
            </div>
        </div>
    );
}

