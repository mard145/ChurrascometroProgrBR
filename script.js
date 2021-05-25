//carne 400 gr por pessoa + de 6h -650
//cerveja - 1200ml por pessoas + 6h - 2000ml
//refrigreantes/agua - 1000ml por pessoa + 6h 1500ml

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calc(){

let adultos = inputAdultos.value 
let criancas = inputCriancas.value 
let duracao = inputDuracao.value 
let quantidadeTotalCarne = CarnePorPessoa(duracao) * adultos + (CarnePorPessoa(duracao) * criancas)
let quantidadeTotalCerveja = CervejaPorPessoa(duracao) * adultos
let quantidadeTotalBebidas = BebidasPorPessoa(duracao) * adultos + (CarnePorPessoa(duracao) * criancas)

resultado.innerHTML = `<p>${quantidadeTotalCarne/1000}Kg de Carne<p>`
resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja/355)}Latas de Cerveja<p>`
resultado.innerHTML += `<p>${(quantidadeTotalBebidas/1000)}L de Bebidas<p>`

}

function CarnePorPessoa(duracao){

    
    if(duracao >= 6){

      
        return 650
    }else{

        return 400
    }
    
}

function CervejaPorPessoa(duracao){

    

    if(duracao >= 6){

       
        return 2000
    }else{

        return 1200
    }
    
}

function BebidasPorPessoa(duracao){


    if(duracao >= 6){

        return 1500
    }else{

        return 1000
    }
    
}