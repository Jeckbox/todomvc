(function (angular) {
	'use strict';
	/**
	*
	*
	*应用程序的主要模块
	*
	
	*/
	//1.为应用程序创建一个模块，用来管理界面结构
	var myApp = angular.module('MyTodoMvc',['ngRoute','app.controllers.main']);

	//路由的配置 
	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/:status?',{
				controller:'MainController',
				templateUrl:'main_templ'
			})
			//.otherwise({redirectTo:'/'})
	}]);
	//注册一个主要的控制器
	
/*	myApp.controller('MainController',['$scope','$location',function($scope,$location){
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
		$scope.todos = [
			{id: 1, text: '学习', completed: false},
			{id: 2, text: '睡觉', completed: true},
			{id: 3, text: '打豆豆', completed: false}
		];

		//添加todo
		$scope.add = function(){
			if(!$scope.text){
				return;
			}
			$scope.todos.push(
				{
				id: getId(),
				//$scope是双向绑定的，add的同时肯定可以通过他拿到界面升输入的值
				text: $scope.text, 
				completed: false
				}
			);
			$scope.text = '';
		}
		//删除todo
		$scope.remove = function(id){
			//删除谁
			for(var i = 0; i < $scope.todos.length; i++){
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					break;
				}
			}
		}
		//清空已完成
		$scope.clear = function(){
			var result = [];
			for(var i = 0; i < $scope.todos.length; i++){
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				}
			}
			$scope.todos =  result;
		};
		//是否有已经完成的
		$scope.existCompleted = function(){
			for(var i = 0; i < $scope.todos.length; i++){
				if($scope.todos[i].completed){
					return true;
				}
			}
			return false; 
		}

		//当前编辑哪一个元素
		$scope.currentEditingId = -1;
		$scope.editing = function(id){
			$scope.currentEditingId = id;
		};
		$scope.save = function(){
			$scope.currentEditingId = -1;
		}
		var now = true;
		$scope.toggleAll = function(){
			for(var i = 0; i < $scope.todos.length; i++){
				$scope.todos[i].completed = now;
			}
			now = !now;
		}
		//状态筛选
		
		$scope.selector = {}// {}  {completed:true}   {completed:true}
		//点击事件不合适，不应该有DOM操作
		//让$scope也有一个指向$location的成员
		$scope.$location = $location;
		//watch只能监视属于$scope的成员
		$scope.$watch('$location.path()',function(now,old){
			//1.拿到锚点值
			//这样写就要求执行环境必须要有window对象
			//var path = $location.path();
			//console.log(now);
			//2.根据锚点的值对selector做变换
			switch(now){
				case '/active':
				$scope.selector = {completed:false};
				break;
				case '/completed':
				$scope.selector = {completed:true};
				break;
				default:
				$scope.selector = {};
				break;
			}
		});
		//自定义比较函数，默认filter是模糊匹配，不符合当前需求
		$scope.equalCompare = function(source,target){
			return source===target;
		}
		
	}]);
*/
})(angular);
