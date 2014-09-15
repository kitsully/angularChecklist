app.controller("MainController", function($scope){
  	$scope.tasks = [

    ];
    $scope.newTodo = null;
    $scope.completed = false;
    $scope.addNew = function() {
        if ($scope.newTodo != null && $scope.newTodo != "") {
            $scope.tasks.push({
                id: $scope.tasks.length,
                name: $scope.newTodo,
            });
        }
    }
	$scope.remove = function(item) { 
	  var index = $scope.tasks.indexOf(item)
	  $scope.tasks.splice(index, 1);     
	}


});