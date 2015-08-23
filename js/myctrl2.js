/**
 * Created by Administrator on 2015/8/10.
 */

angular.module('app',[])
.controller('FirstCtrl',function($scope){
        $scope.msg = "hello angular";
    })
.controller('NextCtrl',function($scope){
        $scope.msg = "";
        $scope.user = {name:'',pwd:''};
        $scope.errormsg = "";
        $scope.reverse = function(){
            return $scope.msg.split("").reverse().join("");
        }
        $scope.login = function(){
            if($scope.user.name == "admin" && $scope.user.pwd == "123"){
                alert("登录成功！");
            }else{
                $scope.errormsg = "登录用户或密码错误";
            }
        }
    })