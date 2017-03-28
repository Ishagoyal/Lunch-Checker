(function () {
	// body...
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope) {
		$scope.userInput="";

		$scope.checkLunch=function(){
			var checkLength = calculateLength($scope.userInput);
			if(checkLength<=3 && checkLength>0){
				$scope.message="Enjoy!"
			}

			else if(checkLength == 0){
				$scope.message="Please enter data first";
			}

			else{
				$scope.message="Too much!";
			}
		};


		function calculateLength(string) {
			// body...
			var arrayLength=0;
			var userArray = string.split(",");
			arrayLength = userArray.length;

			return arrayLength;
		}
	}
})();