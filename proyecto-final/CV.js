let certificado;
let botonV;
let botonC;
document.getElementById('botonCerJava'). addEventListener("click",    function(){
    certificado="certificadoJ";
    botonV="botonVolverJ";
    botonC="botonCerJava"
    mostrar(certificado,botonV,botonC);
} )
document.getElementById('botonCerPro'). addEventListener("click",    function(){
    certificado="certificadoP";
    botonV="botonVolverP"
    botonC="botonCerPro"
    mostrar(certificado,botonV,botonC);
})
document.getElementById("botonVolverP").addEventListener("click",function(){
     certificado="certificadoP";
     botonV="botonVolverP"
     botonC="botonCerPro"
     ocultar(certificado,botonV,botonC);
})
document.getElementById("botonVolverJ").addEventListener("click",function(){
    certificado="certificadoJ";
    botonV="botonVolverJ"
    botonC="botonCerJava"
    ocultar(certificado,botonV,botonC);
})
function mostrar(certificado,botonV,botonC) {
    document.getElementById (certificado).style.display="block";
    document.getElementById(botonV).style.display="block";
    document.getElementById(botonC).style.display="none";
}
function ocultar(certificado,botonV,botonC) {
   document.getElementById(certificado).style.display="none";
   document.getElementById(botonV).style.display="none";
   document.getElementById(botonC).style.display="block";
}