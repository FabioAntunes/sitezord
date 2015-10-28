(function() {
  'use strict';

  angular
    .module('sitezord')
    .directive('zordMalarkey', zordMalarkey);

  /** @ngInject */
  function zordMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '=',
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('zord-malarkey');

      angular.forEach(vm.stuff, function(value) {
        typist.type(value).pause().delete();
      });

      // watcher = scope.$watch('vm.contributors', function() {
      //   angular.forEach(vm.contributors, function(contributor) {
      //     typist.type(contributor.login).pause().delete();
      //   });
      // });

      // scope.$on('$destroy', function () {
      //   watcher();
      // });
    }

    /** @ngInject */
    function MalarkeyController() {
      var vm = this;

      vm.stuff = ['Laravel', 'AngularJS', 'Cordova', 'PHP', 'Javascript', 'HTML5', 'CSS', 'SASS', 'Bootstrap'];
    }

  }

})();
