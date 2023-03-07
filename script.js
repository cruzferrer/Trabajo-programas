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
function algo(){
    edad=document.getElementById("edad").value.trim();
    if (edad === "" || isNaN(edad) || edad.length >4|| edad.length <4 )  {
        alert("Por favor ingrese un número válido.");
        document.getElementById("edad").value = "";
        return;
    }
año= new Date().getFullYear()- parseInt(edad) + " años"
document.getElementById("resul").value=año;
}
function a(){
    
    n1=document.getElementById("1").value;
    n2=document.getElementById("2").value;
    if (isNaN(n1), isNaN(n2)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("1").value = "";
        document.getElementById("2").value = "";
        return;
    }
    if (n1 == n2) {
        mult = parseFloat(n1) * parseFloat(n2);
    } else if (n1 > n2) {
        mult = parseFloat(n1) - parseFloat(n2);
    } else if(n1<n2){
        mult = parseFloat(n1) + parseFloat(n2);
    }
    document.getElementById("resul").value=mult;

}
function num(){
    n1=document.getElementById("1").value;
    n2=document.getElementById("2").value;
    n3=document.getElementById("3").value;
    if (isNaN(n1), isNaN(n2), isNaN(n3)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("1").value = "";
        document.getElementById("2").value = "";
        document.getElementById("3").value = "";
        return;
    }
if(n1>n2 && n1>n3){
    res=n1
}else if(n2>n1 && n2>n3){
    res=n2
}else if(n3>n1 && n3>n1){
    res=n3
}
document.getElementById("resul").value=res;
}
function extra(){
    n1=document.getElementById("tra").value;
    if (isNaN(n1)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("tra").value = "";
        return;

    }
    if (n1==40||n1<41){
        horas="se le pagaran horas normales"
    }else if(n1>40){
        no=parseFloat(n1)-40
        if (no<8){
         horas="se le pagaran 40 horas mas"+ no +" horas extra al doble"
        }else if(no>8){
            xd=parseFloat(no)-8
            horas ="se le pagaran 40 horas mas 8 horas dobles mas"+xd+" horas triples" 
        }
        
    }
    document.getElementById("resula").value=horas;
}
function utili(){
    n=document.getElementById("util").value;
    if (isNaN(n)) {
        alert("Por favor ingrese un número válido.");
        document.getElementById("util").value = "";
        return;

    }
    if (n!==0, n==1){
        p="recibira 5% mas del salario"
    } else if(n>1 , n<3){
        p="recibira 7% mas del salario"
    } else if(n>2 , n<6){
        p="recibira 10% mas del salario"
    } else if(n>5 , n<11){
        p="recibira 15% mas del salario"
    } else if(n>10){
        p="recibira 20% mas del salario"
    }
    document.getElementById("resule").value=p;

}