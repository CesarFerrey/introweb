const tabla = document.querySelector('#tablaUsuarios tbody');
const form = document.getElementById('formUsuario');
const inputId = document.getElementById('id');
const inputNombre = document.getElementById('firstName');
const inputApellido = document.getElementById('lastName');
const inputEmail = document.getElementById('email');

fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    data.users.forEach(usuario => agregarFila(usuario));
  });

function agregarFila(usuario) {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${usuario.id}</td>
    <td>${usuario.firstName}</td>
    <td>${usuario.lastName}</td>
    <td>${usuario.email}</td>
    <td>
      <button onclick="editar(${usuario.id}, '${usuario.firstName}', '${usuario.lastName}', '${usuario.email}')">Editar</button>
      <button onclick="eliminar(${usuario.id})">Eliminar</button>
    </td>
  `;
  tabla.appendChild(fila);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = {
    firstName: inputNombre.value,
    lastName: inputApellido.value,
    email: inputEmail.value,
  };

  if (inputId.value) {
    fetch(`https://dummyjson.com/users/${inputId.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    })
      .then(res => res.json())
      .then(() => {
        alert('Usuario modificado');
        location.reload();
      });
  } else {

    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    })
      .then(res => res.json())
      .then(nuevoUsuario => {
        agregarFila(nuevoUsuario);
        form.reset();
        alert('Usuario creado');
      });
  }
});

function editar(id, nombre, apellido, email) {
  inputId.value = id;
  inputNombre.value = nombre;
  inputApellido.value = apellido;
  inputEmail.value = email;
}

function eliminar(id) {
  if (confirm('¿Estás segura de eliminar este usuario?')) {
    fetch(`https://dummyjson.com/users/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        alert('Usuario eliminado');
        location.reload();
      });
  }
}
