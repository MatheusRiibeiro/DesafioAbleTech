// Desafio técnico Able tech: Edifício Garagem

const corredor1 = [1,1,0,1,0,0,1,0,1]
const corredor2 = [1,1,1,1,1,0,0,1,0]
const corredor3 = [1,0,1,1,1,0,0,0,0]

const andar1 = [corredor1,corredor2,corredor3]

const corredor4 = [0,1,1,1,1,1,0,0,1]
const corredor5 = [1,1,1,1,1,1,1,1,1]
const corredor6 = [0,0,0,0,0,0,0,0,1]

const andar2 = [corredor4,corredor5,corredor6]


const corredor7 = [1,0,1,0,1,1,1,1,0]
const corredor8 = [0,0,0,1,1,1,1,1,1]
const corredor9 = [0,1,0,1,1,1,1,1,0]
const andar3 = [corredor7,corredor8,corredor9]

const edGaragem = [andar1, andar2,andar3]

const valorVaga = 10


//Primeiro desafio: Retornar o total de vagas vagas ocupadas de um determinado corredor.

function vagasOcupadas (corredor){
  let ocupados = 0
  corredor.forEach(function (item){
    if (item===1){
      ocupados++
    } 
    } )
  
  return ocupados
  }
console.log("O total de Vagas Ocupadas é: " + vagasOcupadas(corredor1))


//Segundo desafio: retornar o total de vagas livres de um determinado andar

function andarLivre (andar){
  const corredor1 = andar[0]
  const corredor2 = andar[1]
  const corredor3 = andar[2]
  
  let livres = 0

  corredor1.forEach( function (item){
    if (item===0) {
      livres++
    }

  })

  corredor2.forEach( function (item){
    if (item===0) {
      livres++
    }

  })

  corredor3.forEach( function (item){
    if (item===0) {
      livres++
    }

  })

return livres
  
}
console.log( "O total de vagas livres é de: " + andarLivre(andar2) )


// Terceiro desafio: retornar o valor total arrecadado do edifício.

function vagasOcupadasAndar (andar){
const corredor1 = andar[0]
const corredor2 = andar[1]
const corredor3 = andar[2]

let vagasOcupadas = 0

corredor1.forEach( function (item){
  if (item===1) {
    vagasOcupadas++

  }
})

corredor2.forEach (function(item){
  if (item===1){
    vagasOcupadas++
  }
})

corredor3.forEach (function(item){
  if (item===1){
    vagasOcupadas++
  }
})

return vagasOcupadas

}

function totalArrecadado(edificio){

const andar1 = edificio[0]
const andar2 = edificio[1]
const andar3 = edificio[2]

let valorTotalAndar1 = vagasOcupadasAndar(andar1) * valorVaga
let valorTotalAndar2 = vagasOcupadasAndar(andar2) * valorVaga
let valorTotalAndar3 = vagasOcupadasAndar(andar3) * valorVaga

let valorArrecadado = valorTotalAndar1 + valorTotalAndar2 + valorTotalAndar3

return valorArrecadado
}

console.log ("O valor total arrecadado em reais é : " + totalArrecadado(edGaragem))