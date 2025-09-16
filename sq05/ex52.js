let A, B
A = Number(prompt("Digite o primeiro número:"))
B = Number(prompt("Digite o segundo número:"))
if(A > B){
    alert("Primeiro: "+ A )
    // alert("Primeiro ("+ A +") é maior que o segundo ("+ B +")")
}else if(B > A){
    alert("Segundo: "+ B)
    // alert("Segundo ("+ B +") é maior que o primeiro ("+ A +")")
}else{
    alert("São iguais")
}

