/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

var foodApp = angular.module("FoodApp", []);

foodApp.controller("FoodCtrl", ['$scope', function($scope){
  $scope.veggieCol = [];
  $scope.fruitCol = [];
  $scope.foods = fruits.concat(vegetables);

  //$scope.isCorrect = true;

  $scope.markAsVeg = function(item){
    var index = $scope.foods.indexOf(item)
    $scope.veggieCol.push(item);
    $scope.foods.splice(index, 1);
    if($scope.foods.length <= 0){
      test();
    }
  };

  $scope.markAsFruit = function(item){
    var index = $scope.foods.indexOf(item)
    $scope.fruitCol.push(item);
    $scope.foods.splice(index, 1);
    if($scope.foods.length <= 0){
      test();
    }
  };

  $scope.moveFruitToCenter = function(item){
    var index = $scope.fruitCol.indexOf(item)
    $scope.foods.push(item);
    $scope.fruitCol.splice(index, 1);
  };

  $scope.moveVegToCenter = function(item){
    var index = $scope.veggieCol.indexOf(item)
    $scope.foods.push(item);
    $scope.veggieCol.splice(index, 1);
  };

  var test = function(){
    compareArray($scope.fruitCol, fruits);
    compareArray($scope.veggieCol, vegetables);
  }

  var compareArray = function(array1, array2){
    array1.sort();
    array2.sort();
    for(var i = 0; i=array1.length; i++){
      for(var j = 0; j=array2.length; j++){
        if(array1[i] == array2[i]){
          //array1[i].isCorrect = true;
        }
      }
      //array1[i].isCorrect = false;
    }
  }

}]);
