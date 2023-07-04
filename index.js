var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    bruna.style = "display:flex"
    leonardo.style = "display:none"
    samanta.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
    
}

function RolarParaEsquerda(){
    samanta.style = "display:none"
    leonardo.style = "display:flex"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}
