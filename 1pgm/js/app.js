 /**
 * myapp Module
 *
 * Description
 */
 var app = angular.module("myapp", []);

  app.controller("myntrl",function($scope){
      console.log("first    "  + $scope.name);
       // alert("before call");
        $scope.getData = function () {

             alert("getcalled");
        	console.log("Name    "  + $scope.name);
        	console.log("Surname    "  + $scope.sname);
        	console.log("Location   "  + $scope.loc);
        	// body...
        }


  });


