/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Verificar si el ID de usuario está presente en el almacenamiento local

  checkInternetConnection();

  // Escuchar eventos de cambio en la conexión a Internet
  document.addEventListener("online", checkInternetConnection, false);
  document.addEventListener("offline", handleOffline, false);
 
}



function checkInternetConnection() {
  var networkState = navigator.connection.type;
  if (networkState === Connection.NONE) {
    // No hay conexión a Internet, mostrar indicador de carga
    mostrarIndicadorDeCarga();
  } else {
    // Hay conexión a Internet, ocultar indicador de carga
    ocultarIndicadorDeCarga();

    var storedUserId = localStorage.getItem("userId");

    if (storedUserId) {
      window.location.href = "home.html";
      // El registro del ID de usuario existe, continuar con la lógica de la aplicación
      // ...
    } else {
      // El registro del ID de usuario no existe, redirigir al usuario a la página de inicio de sesión
      window.location.href = "login.html";
    }
  }
}

function handleOffline() {
  // Perdimos la conexión a Internet, mostrar indicador de carga
  mostrarIndicadorDeCarga();
}

function mostrarIndicadorDeCarga() {
  document.getElementById("indicadorCarga").style.display = "block";
}

function ocultarIndicadorDeCarga() {
  document.getElementById("indicadorCarga").style.display = "none";
}
