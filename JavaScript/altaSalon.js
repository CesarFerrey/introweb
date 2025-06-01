document.addEventListener("DOMContentLoaded", () => {
    // Mostrar lista de salones (si aplica)
    mostrarSalones();

    // Referencias a botones de login/logout
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    const usuario = sessionStorage.getItem("usuario");

    // Verificar si el usuario está logueado
    if (!usuario) {
        alert("Debe loguearse");
        window.location.href = "./JavaScript/login.html";
        return;
    }

    // Mostrar u ocultar botones de sesión
    if (loginBtn && logoutBtn) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
    }

    // Manejar botón "Cerrar Sesión"
    const salir = document.getElementById("logout");
    if (salir) {
        salir.addEventListener("click", () => {
            sessionStorage.clear();
            window.location.href = "login.html";
        });
    }

    // Manejo del formulario de alta de salón
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombreSalon").value;
            const direccion = document.getElementById("direccion").value;
            const capacidad = document.getElementById("capacidad").value;

            const nuevoSalon = { nombre, direccion, capacidad };
            const salones = JSON.parse(localStorage.getItem("salones")) || [];
            salones.push(nuevoSalon);
            localStorage.setItem("salones", JSON.stringify(salones));

            alert(`El nuevo salón tiene los siguientes atributos:\nNombre: ${nombre}\nDirección: ${direccion}\nCapacidad: ${capacidad}`);

            this.reset();
            mostrarSalones();
        });

        mostrarSalones();
    }

    // Función para mostrar salones en la tabla
    function mostrarSalones() {
        const tablaBody = document.querySelector("#salonList");
        if (!tablaBody) return;

        tablaBody.innerHTML = ""; // Limpiar antes de cargar

        const salones = JSON.parse(localStorage.getItem("salones")) || [];
        salones.forEach((salon, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${salon.nombre}</td>
                <td>${salon.direccion}</td>
                <td>${salon.capacidad}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminarSalon('${index}')">Eliminar</button>
                    <button class="btn btn-sm btn-primary me-2" onclick="editarSalon('${index}')">Editar</button>
                </td>
            `;
            tablaBody.appendChild(fila);
        });
    }
});
