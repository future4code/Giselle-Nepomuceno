
function criarTarefa(){
   let tarefa = document.getElementById("tarefa")
   let semana = document.getElementById("dias-semana")
   let diaSemana = document.getElementById(semana.value)
    
 diaSemana.innerHTML += `<p class = "model"> - ${tarefa.value}</p>`




}
  function clickTask(){
    let model = document.getElementsByClassName("semana")
  }
