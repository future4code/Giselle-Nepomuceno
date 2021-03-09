

function escreverPost(){
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const post = document.getElementById("conteudo-post")
    const container = document.getElementById("container")

    const info = {
        titulo: titulo.value,
        autor: autor.value,
        post: post.value
    }
    const array = []

    array.push('Titulo: '+ info.titulo, ' Autor: '+ info.autor, ' Post: '+ info.post)

    // container.innerHTML += `<p> ${array}</p>`
    console.log(array)
    autor.value = "" 
    titulo.value = ""
    post.value = ""

    for(let valores of array){
        
    container.innerHTML += `<p class="valores"> ${valores}</p>`

    }


}

function criarPost(){
    escreverPost()
}
    
function apertouEnter(evento){
        if (evento.key === 'Enter'){
            escreverPost()
        }
    }