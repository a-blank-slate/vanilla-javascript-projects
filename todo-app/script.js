var todos=[];
function resetTodo(){
    todos=[];
    $('#todo-container').html('');
}
function addTodo(){
    todos.push($('#todo-input').val());
    $('#todo-input').val('');
    var todoText='';
    console.log(todos);
    for(i=0;i<todos.length;i++){
        todoText += '<div class="alert alert-primary" role="alert">'+todos[i]+'</div>';
    }
    $('#todo-container').html(todoText);
}