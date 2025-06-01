function mostrarSalonesenIndex() {
    const catalogoSection = document.querySelector("#catalogo-salones");

    // Limpiar contenido anterior
    catalogoSection.innerHTML = `
        <div class="row g-4"></div>
    `;

    const row = catalogoSection.querySelector(".row");

    const salones = JSON.parse(localStorage.getItem("salones")) || [];

    salones.forEach((salon) => {
        const div = document.createElement("div");
        div.className = "salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4";

        div.innerHTML = `
            <figure>
                <figcaption><strong>${salon.nombre}</strong>
                    <p>${salon.direccion}</p>
                </figcaption>  
                <img src="${salon.imagen || './Imagenes/Salon1.jpg'}" class="d-block w-100" alt="${salon.nombre}">
                <p class="desc-serv">
                    Capacidad para ${salon.capacidad} personas<br>
                    ${salon.detalles || 'Animadores, inflables, souvenirs.'}
                </p>
            </figure>
        `;

        row.appendChild(div);
    });
}
mostrarSalonesenIndex();
