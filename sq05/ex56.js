let pontuacao 
pontuacao = Number(prompt("Digite sua pontuação:"))

// versão com bug
// if(pontuacao <= 10){
//     alert("Deu ruim!")
// }
// if(pontuacao>10 && pontuacao<=100){
//     alert("Amanhã é um novo dia!")
// }
// if(pontuacao>100 && pontuacao<=200){
//     alert("Sumpimpa!")
// }else{
//     alert("Mitou!")
// }

// funciona, mas feio
// if(pontuacao <= 10){
//     alert("Deu ruim!")
// }
// if(pontuacao>10 && pontuacao<=100){
//     alert("Amanhã é um novo dia!")
// }
// if(pontuacao>100 && pontuacao<=200){
//     alert("Sumpimpa!")
// }
// if(pontuacao > 200){
//     alert("Mitou!")
// }

// bonito e eficiente, o Rodrigo Hilbert
if(pontuacao <= 10){
    alert("Deu ruim!")
}else if(pontuacao<=100){
    alert("Amanhã é um novo dia!")
}else if(pontuacao<=200){
    alert("Sumpimpa!")
}else{
    alert("Mitou!")
}


// let desconto10 = totalBruto * 10/100
// let desconto15 = totalLiquido * 15/100
