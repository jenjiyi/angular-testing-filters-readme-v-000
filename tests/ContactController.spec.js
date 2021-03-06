describe('ContactController', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter the results correctly', function () {
          var $scope = {};
          $controller('ContactController as vm', {$scope: $scope});

          // $scope.vm holds all of our values
          expect($scope.vm.filteredList[0]).toEqual({name: 'Bob'});
      });

});
