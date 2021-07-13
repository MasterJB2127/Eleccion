function local() {
    var loc = localStorage.getItem('FDC');
    var loc2 = localStorage.getItem('MSC');
    if(loc == null && loc2 == null){
        localStorage.setItem('FDC', btoa('V1'));
        localStorage.setItem('MSC', btoa('V1'));
    }
}

$(document).ready(local());