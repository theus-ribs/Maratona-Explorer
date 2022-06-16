const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {
    if(pergunta.value == ""){
        return
    }
    else{
        // gerar numero aleatorio e dar resposta
        const pergunta = document.querySelector("#pergunta").value
        const totalRespostas = respostas.length
        const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
        document.getElementById("pergunta-baixo").innerHTML = (`${pergunta}`)
        document.getElementById("resposta").innerHTML = (`${respostas[numeroAleatorio]}`)
        document.getElementById("pergunta").value=""
        document.getElementById("resposta").style.opacity = 1
        document.getElementById("pergunta-baixo").style.opacity = 0.7
        
        //sumir a resposta depois de 3 segundos
        setTimeout(function(){
            document.getElementById("resposta").style.opacity = 0
        }, 3000)&&
        setTimeout(function(){
            document.getElementById("pergunta-baixo").style.opacity = 0
        }, 3000)
    }
}
document.addEventListener('keypress', function(e) {
    if(e.key === "Enter"){
       const btn = document.querySelector('#btn')
       btn.click()
    }
});