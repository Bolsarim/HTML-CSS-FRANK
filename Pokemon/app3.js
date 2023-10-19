function VerificarResposta(){
    let respostaCerta
    respostaCerta = document.getElementById ("charizard").checked

    if(respostaCerta == true){
        alert("Parabéns!!!\nVocê Acertou.")
    }else{
        alert("Que pena, não foi dessa vez.")
    }
}