four51.app.controller("ContactUsCtrl", ["$scope", "$location", "Email", function($scope, $location, Email){
    $scope.sendEmail = function(para) {
        Email.send(para);
        para = null;
        alert('Your message has been sent!');
        $location.path('catalog');
    }


}]);