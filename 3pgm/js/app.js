/**
var app = *  Module
*
* Description
*/

var app = angular.module('myApp1', []); 

//conroller 01 scope01 
app.controller('detailsCtrl',  function($scope){
      var c = 0;
      $scope.process = function(details){
          c = c+1;
       alert(c)   	 ;
      }
});

//conroller 02 scope02
app.controller('detailsCtrl2',  function($scope){

      var c = 0;
      $scope.process = function(details){
          c = c+1;
       alert("child2" + " " + c)      ;
      }


});





 


/*app.controller('myCtrl', function($scope) 

{  alert("called controller");
    

    var names = {firstname:"Mohammedali" , lastname:"Gafur abdul"};

    if($scope.fname != names.firstname) {


         alert("you have entered wroong name");
    }

/** assign default values   ****/
 
//$scope.fname = "gafur" + "," + $scope.sname;
// alert("$scope.sname");
// alert("$scope.lname"); /*

//}   );   



