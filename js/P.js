var firebaseConfig = {
    apiKey: "AIzaSyANLJq4MJbgWmLQweUvum90HXYC-iqPkNg",
    authDomain: "restaurante-9a1a3.firebaseapp.com",
    databaseURL: "https://sritaflordelcafe-default-rtdb.firebaseio.com/",
    projectId: "restaurante-9a1a3",
    storageBucket: "restaurante-9a1a3.appspot.com",
    messagingSenderId: "1081703776193",
    appId: "1:1081703776193:web:8c3f979250a6f2a7f57940"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function sumar(nombre, votos, id, tipo) {
    var voto = parseInt(votos) + 1;
    if(tipo == 'SFDC'){
        modificarsrta(nombre, voto, id);
    }else{
        modificarniña(nombre, voto, id);
    }
}

function modificarsrta(nombre, voto, id) {
    var db = firebase.database();
    var data = {
        Nombre: nombre,
        Votos: voto
    }
    var key = atob(localStorage.getItem('FDC'));
    if (key == 'V1') {

        if (db.ref('/Candidatas/' + id).update(data)) {
            setTimeout(function () {
                Completado('Voto Realizado Correctamente');
            }, 500);
            localStorage.setItem('FDC', btoa('V2'));
        }
    } else {
        error('Usted Ya Realizó Un Voto Anteriormente');
    }
}

function modificarniña(nombre, voto, id) {
    var db = firebase.database();
    var data = {
        Nombre: nombre,
        Votos: voto
    }
    var key = atob(localStorage.getItem('MSC'));
    if (key == 'V1') {

        if (db.ref('/Candidatas/' + id).update(data)) {
            setTimeout(function () {
                Completado('Voto Realizado Correctamente');
            }, 500);
            localStorage.setItem('MSC', btoa('V2'));
        }
    } else {
        error('Usted Ya Realizó Un Voto Anteriormente');
    }
}

function buscar(n, id, tipo) {
try{
    const menu = firebase.database().ref("Candidatas/");
    var nombre;
    var votos;
    menu.on("value", function (snapshot) {
        snapshot.forEach(function (childsnapshot) {
            var data = childsnapshot.val();
            if (data.Nombre == n) {
                nombre = data.Nombre;
                votos = data.Votos;
            }
        }
        );
    })
    sumar(nombre, votos, id, tipo);
}catch{
    error('Ocurrió un Error, Intente Votar Nuevamente');
}
}

function Nohay(){
    error('VOTACIONES PROXIMAMENTE');
}

function local() {
    var key = atob(localStorage.getItem('FDC'));
}

$(document).ready(local());

function Completado(E) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr["success"](E);
}

function error(E) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr["error"](E, "ERROR")
}