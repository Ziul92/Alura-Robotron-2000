import {pecas} from "./estatisticas.js";
import {cores} from "./cores.js"

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatisticas]")
const imagem = document.querySelector("[data-imagem]")

controle.forEach( (elemento) => {
   elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
      atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
   }) 
})

function manipulaDados(operacao, controle) {
   const peca = controle.querySelector("[data-contador]")
   if (operacao === "-") {
      peca.value = parseInt(peca.value) - 1
   } else {
      peca.value = parseInt(peca.value) + 1
   }
}

function atualizaEstatisticas(operacao, peca) {
   if (operacao === "+") {
      estatisticas.forEach((elemento) => {
         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
      })
   } else {
      estatisticas.forEach((elemento) => {
         elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatisticas]
      })
   }
}

let i = 0
imagem.addEventListener("click", () => {
   if(i < cores.length) {
      imagem.src = `img/Robotron 2000 - ${cores[i]}.png`
      i++
   } else {
      i = 0
   }
})

