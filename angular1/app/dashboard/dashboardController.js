(function() {
  angular.module('caedApp').controller('DashboardCtrl', ['$scope', '$http', DashboardController]);

  function DashboardController($scope, $http) {
    const vm = this;
    //vm -> view model
    vm.getSummary = function() {
      const url = 'http://localhost:3003/api/billingSummary';
      $http.get(url).then(function(response) {
        const { credit = 0, debt = 0 } = response.data;
        vm.credit = credit;
        vm.debt = debt;
        vm.total = credit - debt;
      });
    };

    vm.getSummary();
  }
})();
