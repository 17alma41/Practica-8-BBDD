function dadoAleatorio(){
    const data = document.querySelector("#input_dados").value
    console.log(data)
    const tirada = data.split("d")
    console.log(tirada)
    const mis_dados = []
    for (let i = 0; i < tirada[0]; i++) {
        const resultado = Math.floor(Math.random() * tirada[1]) + 1
        mis_dados.push(resultado)
    }
    console.log(mis_dados)
}
