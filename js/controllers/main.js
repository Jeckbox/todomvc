(function(angular){

	var controllers = angular.module('app.controllers.main',['app.service.main']);
	controllers.controller('MainController',[
		'$scope',
		'$routeParams',
		'$route',
		'MainService',
		function($scope,$routeParams,$route,MainService){
		function getId(){
			var id = Math.random();
			for( var i = 0; i < $scope.todos.length; i++){
				if($scope.todos[i].id === id){
					id = getid();
					break;
				}
			}
			return id;
		}

		//文本框需要一个模型
		$scope.text = '';
		//任务列表也需要一个
		// 每一个任务的结构{id:1, text:'学习',completed:true}
		$scope.todos = MainService.get();
		//添加todo
		$scope.add = function(){
			if(!$scope.text){
				return;
			}
			MainService.add($scope.text);
			console.log(11111111);
			$scope.text = '';
		}
		//删除todo
		$scope.remove = function(id){
			//吃出是界面逻辑
			MainService.remove(id);
		}
		//清空已完成
		$scope.clear = function(){
			var newTodos = MainService.clearCompleted();
			$scope.todos = newTodos;
		};
		//是否有已经完成的
		$scope.existCompleted = MainService.existCompleted;

		//当前编辑哪一个元素
		$scope.currentEditingId = -1;
		$scope.editing = function(id){
			//页面逻辑
			$scope.currentEditingId = id;
		};
		$scope.save = function(){
			$scope.currentEditingId = -1;
		}
		var now = true;
		$scope.toggleAll = MainService.toggleAll;

		$scope.toggle = function(){
			MainService.update();
		}
		//状态筛选
		
		$scope.selector = {}// {}  {completed:true}   {completed:true}
	 	//取路由中匹配出来的数据
	 	var status = $routeParams.status;
	 	switch(status){
				case 'active':
				$scope.selector = {completed:false};
				break;
				case 'completed':
				$scope.selector = {completed:true};
				break;
				default:
				$route.updateParams({status:''});
				$scope.selector = {};
				break;
			}
		//自定义比较函数，默认filter是模糊匹配，不符合当前需求
		$scope.equalCompare = function(source,target){
			return source===target;
		}
		
	}]);
}(angular));