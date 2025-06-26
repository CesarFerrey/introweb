document.addEventListener("DOMContentLoaded", () => {
  
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

  
    salonesContainer.innerHTML = "";

   
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

document.getElementById("formPresupuesto").addEventListener("submit", function (event) {
    event.preventDefault();
  
 
    const salon = document.getElementById("salon").value;
    const cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value, 10);
    const serviciosAdicionales = Array.from(document.getElementById("serviciosAdicionales").selectedOptions).map(option => option.value);
  
 
    const preciosBase = {
      "Universo bajito": 100000,
      "Luna llena": 130000,
      "Aventura cósmica": 140000,
      "Jardín de estrellas": 160000,
      "Jungla de diversión": 180000,
      "Mundo mágico": 200000,
      "Luna de papel": 230000,
      "La máquina de jugar": 250000,
    };
  
 
    const preciosServicios = {
      Animadores: 50000,
      Souvenirs: 40000,
      Inflables: 30000,
      "Shows de magia": 50000,
      Karaoke: 1000,
    };
  
   
    let costoTotal = preciosBase[salon] || 0;
    serviciosAdicionales.forEach(servicio => {
      costoTotal += preciosServicios[servicio] || 0;
    });
  
   
    costoTotal += cantidadPersonas * 2000;
  
  
    const resultadoPresupuesto = document.getElementById("resultadoPresupuesto");
    resultadoPresupuesto.innerHTML = `
      <h4>Presupuesto Calculado</h4>
      <p><strong>Salón:</strong> ${salon}</p>
      <p><strong>Cantidad de personas:</strong> ${cantidadPersonas}</p>
      <p><strong>Servicios adicionales:</strong> ${serviciosAdicionales.join(", ") || "Ninguno"}</p>
      <p><strong>Costo total:</strong> $${costoTotal}</p>
    `;
  });