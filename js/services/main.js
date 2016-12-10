(function(angular){
	//注册一个新模块
	angular.module('app.service.main',[])
		.service('MainService',['$window',function($window){
			var storage = $window.localStorage;
			var todos = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];
		
			function getId(){
				var id = Math.random();
				for( var i = 0; i <todos.length; i++){
					if(todos[i].id === id){
						id = getid();
						break;
					};
				};
				return id;
			};
			function save(){
				storage['my_todo_list'] = JSON.stringify(todos); 
			};
			//控制私有字段的访问权限
			this.get = function(){
				return todos;
			};
			//业务逻辑都必须出现在服务中（专门定义业务逻辑的）
			//添加todo
			this.add = function(text){
				todos.push(
					{
						id: getId(),
						//$scope是双向绑定的，add的同时肯定可以通过他拿到界面升输入的值
						text: text, 
						completed: false
					}
				);
				save();
			};
			//删除todo
			this.remove = function(id){
				//删除谁
				for(var i = 0; i < todos.length; i++){
					if(todos[i].id === id){
						todos.splice(i,1);
						break;
					};
				};
				save();
			};
			//清空已完成
			this.clearCompleted = function(){
				var result = [];
				for(var i = 0; i < todos.length; i++){
					if(!todos[i].completed){
						result.push(todos[i]);
					};
				};
				todos =  result;
				save();
				//此时，我们将todos指向了一个新的地址
				return todos;
			};
			//是否有已经完成的
			this.existCompleted = function(){
				for(var i = 0; i <todos.length; i++){
					if(todos[i].completed){
						return true;
					};
				};
				return false; 
			};
			//更新
			this.update = function(id,target){
				save();
			};
			var now = true;
			this.toggleAll = function(){
				for(var i = 0; i <todos.length; i++){
					todos[i].completed = now;
				};
				now = !now;
				save();
			};
		}]);
}(angular));