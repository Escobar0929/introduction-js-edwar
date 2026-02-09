// Notificacion API 
// La notficacion api es una interfaz del navegador que permite a las aplicaciones web mostrar notficaciones nativas del sistema operativo, incluso cuando la estaña NO esta activa 

const button = document.querySelector(".button");

button.addEventListener('click', () => {
    console.log("you made click");
    Notification.requestPermission().then(Permissions => {
        if(Permissions === "granted") {
            new Notification("Esta es una notificacion"), {
                body : "Aprediendo JS en el SENA"
            };    
        }else{
            console.log("Permiso denegado");
        }
    });
});