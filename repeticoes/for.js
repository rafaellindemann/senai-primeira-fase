
// let i = 0
// while(i<3){
//     alert("Valor do i: " + i)
//     i++
// }

// for(let i = 0; i<3; i++){
//     alert("Valor do i: " + i)
// }

// let soma = 0
// let nota1 = Number(prompt("Digite a nota: "))
// soma = nota1
// let nota2 = Number(prompt("Digita ai a 2a: "))
// soma = soma + nota2
// let nota3 = Number(prompt("3a: "))
// soma = soma + nota3

let soma = 0
for(let i=0; i<10; i++){
    let nota = Number(prompt("Digite a "+ (i+1) + "a nota: "))
    soma = soma + nota
}

alert("Soma: " + soma)

const nomes = ["Dona Bete", "Mano Juca", "Lúcio Fernando", "Capitão Ganso"]

for(let i=0; i<4; i++){
    alert(nomes[i])
}
for(let i=1; i<=10; i++){
    alert(i)
}

