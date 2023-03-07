function cap(){

    c=document.getElementById("capi").value;
    if (isNaN(c)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("capi").value = "";
        return;
    }
    d=c*0.02
    t=parseFloat(d)+parseFloat(c)
    document.getElementById("resul").value=t;
    
}
function base(){
    alert("hola")
    b=document.getElementById("sul").value;
    if (isNaN(b)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("sul").value = "";
        return;
    }
    tot=b*0.1
    t=parseFloat(tot)+parseFloat(tot)+parseFloat(tot)+parseFloat(b)
    document.getElementById("resul").value=t;
}
function 