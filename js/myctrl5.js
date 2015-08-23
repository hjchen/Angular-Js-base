/**
 * Created by Administrator on 2015/8/10.
 */
angular.module('app',[])
    .controller('AddressCtrl',function($scope){
        $scope.list=[
            {id:1,address:"广州"},
            {id:2,address:"上海"},
            {id:3,address:"香港"}
        ];
    });