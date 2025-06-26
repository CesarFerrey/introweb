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
  fila.id = `fila${usuario.id}`;
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
    .then(usuarioActualizado => {
      alert('Usuario modificado');
      actualizarFila(usuarioActualizado);
      form.reset();
      inputId.value = '';
    });
}
   else {

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
function actualizarFila(usuario) {
  const fila = document.getElementById(`fila${usuario.id}`);
  if (!fila) return;
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
}


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
        const fila = document.getElementById(`fila${id}`);
        if (fila) fila.remove();
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  listarUsuarios();

  
  document.getElementById("formUsuario").addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementById("id").value;
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;

      if (id) {
         
          editarUsuario(id, { firstName, lastName, email });
      } else {
         
          crearUsuario({ firstName, lastName, email });
      }
  });
});


function listarUsuarios() {
  fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#tablaUsuarios tbody");
      tbody.innerHTML = ""; 
      data.users.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.id = `fila${usuario.id}`;
        fila.innerHTML = `
          <td>${usuario.id}</td>
          <td>${usuario.firstName}</td>
          <td>${usuario.lastName}</td>
          <td>${usuario.email}</td>
          <td>
            <button onclick="cargarUsuario(${usuario.id})">Editar</button>
            <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
          </td>
        `;
        tbody.appendChild(fila);
      });
    })
    .catch(error => console.error("Error al listar usuarios:", error));
}


function cargarUsuario(id) {
  fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(usuario => {
          document.getElementById("id").value = usuario.id;
          document.getElementById("firstName").value = usuario.firstName;
          document.getElementById("lastName").value = usuario.lastName;
          document.getElementById("email").value = usuario.email;
      })
      .catch(error => console.error("Error al cargar usuario:", error));
}

function editarUsuario(id, usuario) {
  fetch(`https://dummyjson.com/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  })
    .then(res => res.json())
    .then(data => {
      alert("Usuario editado exitosamente");
      
      const fila = document.getElementById(`fila${id}`);
      if (fila) {
        fila.innerHTML = `
          <td>${data.id}</td>
          <td>${data.firstName}</td>
          <td>${data.lastName}</td>
          <td>${data.email}</td>
          <td>
            <button onclick="cargarUsuario(${data.id})">Editar</button>
            <button onclick="eliminarUsuario(${data.id})">Eliminar</button>
          </td>
        `;
      }
    })
    .catch(error => console.error("Error al editar usuario:", error));
}


function eliminarUsuario(id) {
  if (confirm("¿Estás seguro de eliminar este usuario?")) {
    fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        alert("Usuario eliminado exitosamente");
        const fila = document.getElementById(`fila${id}`);
        if (fila) fila.remove();
      })
      .catch(error => console.error("Error al eliminar usuario:", error));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout");

  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      sessionStorage.clear(); 

      window.location.href = "../index.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const salonButton = document.getElementById("salon");

  if (salonButton) {
    salonButton.addEventListener("click", function () {
      // Redirige a la página de alta de salón
      window.location.href = "../pages/altaSalon.html";
    });
  }
});
