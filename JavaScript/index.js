document.addEventListener("DOMContentLoaded", () => {
    // Mostrar los salones en el index
    const salones = JSON.parse(localStorage.getItem("salones"));
    if (salones.length >0){
        mostrarSalonesenIndex(salones);
    }else{
        const cartel = document.getElementById('catalogo-salones');
        cartel.innerHTML = "<p>Aún no se han cargado salones. Si sos administrador ingresá a tu sesión para cargarlos</p>";
    }

});

function mostrarSalonesenIndex(salones) {
    const salonesContainer = document.getElementById("salones-container");

    // Limpiar contenido anterior
    salonesContainer.innerHTML = "";

    // Generar el contenido HTML para cada salón
    salones.forEach(salon => {
        const salonHTML = `
            <div class="salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <figure>
                    <figcaption><strong>${salon.nombre}</strong>
                        <p>${salon.direccion}</p>
                    </figcaption>
                    <img src="${salon.imagen}" class="d-block w-100" alt="${salon.nombre}">
                    <p class="desc-serv">
                        Capacidad: ${salon.capacidad} personas<br>
                        Servicios: ${salon.servicios}
                    </p>
                </figure>
            </div>
        `;
        salonesContainer.innerHTML += salonHTML;
    });
}