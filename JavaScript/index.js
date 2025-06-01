function mostrarSalonesIndex(salones){
    const catalogoSalones= document.getElementById('contenedor-de-salones');// creo que se necesita para mandarlo
    salones.forEach((salon => {
        const grillaSalon = document.createElement("div");
        grillaSalon.className ="salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4";
        //acá la imagen con el titulo etc
        const contFigure = document.createElement("figure");//es el contenedor de la imagen, no tenia clase
        //figcaption de titulos y direccion
        const tituloSalon = document.createElement("figcaption");
        const titulo = document.createElement("strong");
        titulo.textContent = salon.nombre;
        const direccionSalon = document.createElement("p");
        direccionSalon.textContent = salon.direccion;
        // imagen del salon con el texto alternativo (el nombre del salón para no hacer tanto lio)
        const img = document.createElement("img");
        img.src = salon.imagen;
        img.alt = salon.nombre;
        img.classList.add("d-block", "w-100");
        // Capacidad, servicios, etc
        const capacidad = document.createElement("p");
        capacidad.textContent = salon.capacidad;
        const servicios = document.createElement("p");
        servicios.classList.add("desc-serv");
        servicios.textContent = salon.servicios;
        //juntando todo en la estructura de abajo para arriba (ojo los que estan en contenedores solos)
        //primero los de figure
        tituloSalon.appendChild(titulo);
        tituloSalon.appendChild(direccionSalon);
        //el contenedor general
        contFigure.appendChild(tituloSalon);
        contFigure.appendChild(img);
        contFigure.appendChild(servicios);
        contFigure.appendChild(capacidad);
        grillaSalon.appendChild(contFigure);
        catalogoSalones.appendChild(grillaSalon);
    }));   
}
document.addEventListener("DOMContentLoaded", () =>{
    const salonesGuardados = JSON.parse(localStorage.getItem("salones")) || [] ; //chequeamos qué tiene el storage
    if (salonesGuardados.length>0){
        mostrarSalonesIndex(salonesGuardados)
    }else{
        const cartel = document.getElementById('contenedor-de-salones');
        cartel.innerHTML = "<p>Aún no se han cargado elementos</p>";
        
    }
});

