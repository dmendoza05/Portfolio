(function() {
  angular
  .module('portfolio')
  .controller('MainController', MainController);

  MainController.$inject = ['$http'];

    function MainController ($http) {

    var self = this;

    self.test = function() {
      console.log("test");
    };
  }
})();
