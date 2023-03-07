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
function 