if (sessionStorage.getItem("usuario"))  {
    alert("Este usuario ya está logueado")
    window.location.href = "altaSalon.html";
    }
    
    document.getElementById("loginForm").addEventListener("submit",function(event){
        event.preventDefault(); 

    // Obtenemos los valores de usuario y contraseña
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("contraseña").value;

    // Verifica si los campos están vacíos
        if (usuario === "admin" && contraseña === "1234") {
    
        sessionStorage.setItem("usuario", usuario);
        alert("Login exitoso");
        window.location.href = "altaSalon.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });