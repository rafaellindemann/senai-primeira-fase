programa {
  funcao inicio() {
    real cafe, cafe_per_capita
    inteiro alunos
    escreva("Quantos litros de café? ")
    leia(cafe)
    escreva("Quantos alunos tem hoje? ")
    leia(alunos)
    cafe_per_capita = cafe / alunos
    escreva("Quantidade de café por cabeça: " + cafe_per_capita + " litros")
  }
}
