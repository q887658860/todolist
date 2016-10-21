var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');


var createItem = function(req, res) {
	new Todo({
		content: req.body.content,
		updated_at: Date.now()
	}).save(function(err, todo, count) {
		res.redirect('/');
	});

};

var displayAll = function(req, res) {
	Todo.find(function(err, todos, count){
		res.render('index', {
			title: 'Express Todo Demo',
			todos: todos
		});
	});
}


var deleteItem = function(req, res) {
	Todo.findById(req.params.id, function(err, todo) {
		todo.remove(function(){
			res.redirect('/');
		});
	});
}


var editItem = function(req, res) {
	Todo.find(function(err, todos){
		res.render('edit', {
			title: 'Express Todo Demo',
			todos: todos,
			current: req.params.id
		});
	});
}




exports.createItem = createItem;
exports.displayAll = displayAll;
exports.deleteItem = deleteItem;
exports.editItem = editItem;

