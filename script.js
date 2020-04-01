var botaoAdicionar = document.getElementById('adicionar');  
var inputTarefa = document.getElementById('tarefa');

botaoAdicionar.addEventListener('click', function(event) {
    console.log(event); 
    adicionarTarefa();    
});

inputTarefa.addEventListener('keypress', function(event) {
    console.log(event);  
    if(event.keyCode === 13) {
        console.log('Teclou enter');
        adicionarTarefa();
    }  
})

function adicionarTarefa() {
    var tarefa = inputTarefa.value;    
    if(tarefa !== '') {
        var li = document.createElement('li');
        li.classList.add('pendente');
        // li.style.color = 'red';
        // li.addEventListener('click', function() { })
        li.onclick = function(event) {
            // var elementoClicado = event.target;
            // elementoClicado.style.color = 'green';
            // li.style.color = 'green';
            li.classList.remove('pendente');
            li.classList.add('concluida');
        };
        var no = document.createTextNode(tarefa);
        li.appendChild(no);
        var ol = document.getElementById('tarefas');
        ol.appendChild(li);
        inputTarefa.value = '';
    }
}