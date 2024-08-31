document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;
    alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
});

document.querySelectorAll('#galeria img').forEach(function(img) {

    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });


    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

