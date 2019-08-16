window.onload = function() {
    console.warn("OLAAA MUNDOOOOO")

    let meuForm = $("form#formAluno")

    console.log(meuForm)

    meuForm.on("submit", function(event){
        event.preventDefault()
        console.log("DEU CERTO")
    let botao = $("form button")
    console.log(botao)

    let botaoQGira = Ladda.create(botao[0])
    botaoQGira.start()
    })
}