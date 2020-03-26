var botaoAdicionar = document.getElementById('adicionar');
botaoAdicionar.addEventListener('click', function() {
    var inputTarefa = document.getElementById('tarefa');
    var tarefa = inputTarefa.value;    
    if(tarefa !== '') {
        var li = document.createElement('li');
        var no = document.createTextNode(tarefa);
        li.appendChild(no);
        var ol = document.getElementById('tarefas');
        ol.appendChild(li);
        inputTarefa.value = '';
    }
});
