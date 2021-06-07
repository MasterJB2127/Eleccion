

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

function sumar(nombre, votos, id) {

    var voto = parseInt(votos) + 1;
    console.log(voto);
    modificar(nombre, voto, id);
}

function modificar(nombre, voto, id) {
    var db = firebase.database();

    var data = {
        Nombre: nombre,
        Votos: voto
    }

    var key = atob(localStorage.getItem('FDC'));
    console.log(key);
    if (key == 'V2') {

        if (db.ref('/Candidatas/' + id).update(data)) {
            setTimeout(function () {
                Completado('VOTO REALIZADO CORRECTAMENTE');
            }, 500);
            localStorage.setItem('FDC', btoa('V1'));
        }
    } else {
        error('USTED YA REALIZÓ UN VOTO ANTERIORMENTE');
    }
}

function buscar(n, id) {
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
    sumar(nombre, votos, id);
}catch{
    error('OCURRIÓ UN ERROR INTENTE VOTAR DE NUEVO');
}
}

function local() {
    var key = atob(localStorage.getItem('FDC'));
    console.log(key);
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