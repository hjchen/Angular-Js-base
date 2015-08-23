/**
 * Created by Administrator on 2015/8/10.
 */
var app = angular.module('app',[]);
app.directive('enter',function(){
    return function(scope,element,attrs){
        element.bind('mouseenter',function(){
            //console.log("我进来了");
            element.addClass('alert-box');
        })
    }
})

app.directive('leave',function(){
    return function(scope,element,attrs){
        element.bind('mouseleave',function(){
            //console.log("我进来了");
            element.removeClass('alert-box');
        })
    }
})

app.directive('hello',function(){
    return{
        restrict:'E',
        template:'<div><input class="input" ng-model="txt"></div><div>{{txt}}</div>',
        link:function(scope,element){
            scope.$watch('txt',function(newVal){
                if(newVal == 'error'){
                    element.addClass('alert-box alert');
                }
            })
        }
    }
})
