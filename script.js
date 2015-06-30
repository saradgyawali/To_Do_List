/* $(function() {
//toDos array (it holds our data)
	var toDos = [
	{name: "Cooking", desc: "Cook Pasta"},
	{name: "Cleaning", desc: "Vaccum Living Room"},
	{name: "Coding", desc: "Do HomeWork"}

  ];

  var $newToDo = $('#new-todo');

  var $toDoList = $('#todo-list');


  _.each(toDos, function (todo, index) {
  	$toDoList.append('<li class="todo">' + todo.name + ' - ' + todo.desc + '</li>');

  });

  $newToDo.on('submit', function(event) {
  	event.preventDefault();

  	var toDoName = $('#todo-name').val();
  	var toDoDesc = $('#todo-desc').val();
  	var toDOData = {name: toDoName, desc: toDoDesc};

  	$toDoList.append('<li class="todo>' + toDoData.name + ' - ' + toDoData.desc + '</li>');

  	$newToDo[0].reset();
  	$('#todo-name').focus();

  });

  $toDOList.on('click', '.todo', function() {
  	$(this).addClass('done');

  });
}); */

$(function() {

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data
  var toDos = [
	{name: "Cooking", desc: "Cook Pasta"},
	{name: "Cleaning", desc: "Vaccum Living Room"},
	{name: "Coding", desc: "Do HomeWork"}
  ];

  // form to create new todo
  var $newToDo = $('#new-todo');
  
  // element to hold our list of todos
  var $toDoList = $('#todo-list');

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(toDos, function (todo, index) {
    $toDoList.append('<li class="todo">' + todo.name + ' - ' + todo.desc + '</li>');
  });

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDoData = {name: toDoName, desc: toDoDesc};

    // store our new todo
    toDos.push(toDoData);

    // append our new todo to the page
    $toDoList.append('<li class="todo">' + toDoData.name + ' - ' + toDoData.desc + '</li>');

    // reset the form
    $newToDo[0].reset();
    $('#todo-name').focus();
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo', function() {
    $(this).addClass('done');
  });

});