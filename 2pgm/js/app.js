/**
var app = *  Module
*
* Description
*/

var app = angular.module('myApp1', []); 

app.controller('detailsCtrl',  function($scope){

    // var details =  $scope.fname1 + ","  + $scope.sname1;

      //process(details);

      
      var c = 0;

      $scope.process = function(details){

          c = c+1;

       alert(c)   	 ;
	    
	
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



