/**
 * Created by Administrator on 2015/8/16.
 */
var app = angular.module('app',[]);
/*app.controller('Appctrl',function($scope){
    $scope.loadMoreData = function(){
        alert("正在加载数据。。。。");
    }
    $scope.delData = function(){
        alert("正在删除数据。。。。");
    }
})*/

/*
app.directive('enter',function(){
    return function(scope,element,attrs){
        element.bind('mouseenter',function(){
            scope.$apply(attrs.enter);
        })
    }
})*/

app.directive('food',function(){
    return {
        restrict:'E',
        controller:function($scope){
            $scope.foods=[];
            this.addApple=function(){
                $scope.foods.push('apple');
            }
            this.addOrange=function(){
                $scope.foods.push('orange');
            }
            this.addBanana=function(){
                $scope.foods.push('banana');
            }
        },
        link:function(scope,element,attrs){
            element.bind('mouseenter',function(){
                console.log(scope.foods);
            });
        }
    }
})

app.directive('apple',function(){
    return{
        require:'food',
        link:function(scope,element,attrs,foodCtrl){
            foodCtrl.addApple();
        }
    }
})

app.directive('orange',function(){
    return{
        require:'food',
        link:function(scope,element,attrs,foodCtrl){
            foodCtrl.addOrange();
        }
    }
})

app.directive('banana',function(){
    return{
        require:'food',
        link:function(scope,element,attrs,foodCtrl){
            foodCtrl.addBanana();
        }
    }
})
