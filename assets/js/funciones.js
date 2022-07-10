document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contact-form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('name').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el Usuario');
    return;
  }
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en el Email');
    return;
  }
  var subject = document.getElementById('subject').value;
  if(subject.length == 0) {
    alert('No has escrito nada en el Asunto');
    return;
  }
  var mensaje = document.getElementById('message').value;
  if(mensaje.length == 0) {
    alert('No has escrito nada en el Mensaje');
    return;
  }
  this.submit();
}


