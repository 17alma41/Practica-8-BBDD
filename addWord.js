function addWord(){
    const text = document.querySelector("#text").value
    let element = document.createElement("p");
    console.log(element);
    element.innerHTML = text
    
    const contenedor = document.querySelector("#div1");
    contenedor.appendChild(element);
}

