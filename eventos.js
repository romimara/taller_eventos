let div = document.getElementById('div');

div.addEventListener('click', function() {
    alert('Hola! Soy el div');
});
boton.addEventListener('click', function(event) {
    event.stopPropagation();
    lanzarAlerta();
});