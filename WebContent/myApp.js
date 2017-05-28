var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/register", {
        templateUrl : "register.html",
    		controller : "UserController"

    })
    .when("/blog", {
        templateUrl : "blog.html"
    })
    .when("/event", {
        templateUrl : "event.html"
    });
});