$(document).ready(function validate(){
    if(localStorage.getItem("MSC") == null && localStorage.getItem("FDC") == null){
        localStorage.setItem("MSC", btoa('V1'));
        localStorage.setItem("FDC", btoa('V2'));
    }
});

function FDC(id){
    var voto = atob(localStorage.getItem("FDC"));
    if(voto == 'V2'){
        localStorage.setItem("FDC", btoa("realizado"));
        $.post("https://awuzoeig3b.execute-api.us-east-1.amazonaws.com/dev/elecc/"+id,{}, function(){  
            Espera();
            setTimeout(function(){Realizado()},5500);
        });
    }else{
        Err();
    }
}

function MSC(id){
    var voto = atob(localStorage.getItem("MSC"));
    if(voto == 'V1'){
        localStorage.setItem("MSC", btoa("realizado"));
        $.post("https://awuzoeig3b.execute-api.us-east-1.amazonaws.com/dev/elecc/"+id,{}, function(){  
            Espera();
            setTimeout(function(){Realizado()},5500);
        });
    }else{
        Err()
    }
}

function Espera(){
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-bottom-center",
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
    toastr["info"]("PROCESANDO VOTO", "ESPERE POR FAVOR");
    }
    
    function Realizado(){
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-center",
      "preventDuplicates": true,
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
    toastr["success"]("VOTO REALIZADO", "OK!");
    }
    
    function Err(){
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": true,
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
      toastr["error"]("USTED YA HA REALIZADO UN VOTO", "ERROR");
    }