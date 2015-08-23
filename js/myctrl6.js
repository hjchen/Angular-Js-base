var app = angular.module('app',[]);
app.directive('hello',function(){
    return{
        /*restrict:'E',//E表示Element
        replace:true,
        template:'<div>hello angularjs</div>'*/
        //restrict:'A',//E表示Atribute属性
        restrict:'C',//C表示class
        link:function(){
            alert("我在这里class");
        }
    }
})