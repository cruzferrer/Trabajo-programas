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
function des(){
    din=document.getElementById("dine").value;
    if (isNaN(din)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("dine").value = "";
        return;
    }
    desc=din*0.15
    desct=parseFloat(din)-parseFloat(desc)
    document.getElementById("resul").value=desct;
    
}
function prom(){
    p1=document.getElementById("p1").value;
    p2=document.getElementById("p2").value;
    p3=document.getElementById("p3").value;
    if (isNaN(p1), isNaN(p2), isNaN(p3)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("p1").value = "";
        document.getElementById("p2").value = "";
        document.getElementById("p3").value = "";
        return;
    }
 
        
    
    ex=document.getElementById("Ex").value;
    if (isNaN(ex)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("Ex").value = "";
        return;
    }
    tf=document.getElementById("tfin").value;
    if (isNaN(tf)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("tfin").value = "";
        return;
    }

    par= parseFloat(p1)+parseFloat(p2)+parseFloat(p3)
    a=par/3
    prompar= a*5.5
   
    calex=ex*3.0
    tfi=tf*1.5

    
    t=parseFloat(prompar)+parseFloat(calex)+parseFloat(tfi)
    tin=t/10
    document.getElementById("resul").value=tin;
    
}
function promes(){
   h=document.getElementById("Hom").value;
   m=document.getElementById("Muj").value;
   if (isNaN(h), isNaN(m)) {
    alert("Por favor ingrese un número válido.");
    document.getElementById("Hom").value = "";
    document.getElementById("Muj").value = "";
    return;

}
totest=parseFloat(h)+parseFloat(m)
th=h/parseFloat(totest)*100 + "%"
tm=m/parseFloat(totest)*100 + "%"

document.getElementById("resulh").value=th;
document.getElementById("resulm").value=tm;

}
