/**
 * Created by Administrator on 2015/8/10.
 */
angular.module('app',[])
    .value('realname','zhaoliu')//可以改变
    .constant('http',"www.baidu.com")//常量，不可改变
    .factory('Data',function(){//工厂模式
        return{
            msg:"你好啊",
            setMsg:function(){
                this.msg = "我不好";
            }
        }
    })
    .service('User',function(){
        this.firstname = "上官";
        this.lastname = "飞燕";
        this.getName = function(){
            return this.firstname+this.lastname;
        }
    })
    .controller('MyCtrl',function($scope,realname,http,Data,User){
        $scope.msg="angular";
        $scope.realname = realname;
        $scope.http = http;
        $scope.data = Data;
        Data.setMsg();
        $scope.uname = User.getName();
    });