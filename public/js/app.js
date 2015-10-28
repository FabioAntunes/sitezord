(function() {
  'use strict';

  angular
    .module('sitezord', ['ngAnimate', 'ngCookies', 'ngTouch', 'ui.router', 'ui.bootstrap']);

})();

(function() {
  'use strict';

  angular
    .module('sitezord')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }
  config.$inject = ["$logProvider", "toastr"];

})();

/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('sitezord')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment);

})();

(function() {
  'use strict';

  angular
    .module('sitezord')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }
  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

})();

(function() {
  'use strict';
  angular
    .module('sitezord')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
  runBlock.$inject = ["$log"];

})();

(function() {
  'use strict';

  angular
    .module('sitezord')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

  }
})();

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
  zordMalarkey.$inject = ["malarkey"];

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lm1vZHVsZS5qcyIsImluZGV4LmNvbmZpZy5qcyIsImluZGV4LmNvbnN0YW50cy5qcyIsImluZGV4LnJvdXRlLmpzIiwiaW5kZXgucnVuLmpzIiwibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFdBQUE7RUFDQTs7RUFFQTtLQUNBLE9BQUEsWUFBQSxDQUFBLGFBQUEsYUFBQSxXQUFBLGFBQUE7Ozs7QUNKQSxDQUFBLFdBQUE7RUFDQTs7RUFFQTtLQUNBLE9BQUE7S0FDQSxPQUFBOzs7RUFHQSxTQUFBLE9BQUEsY0FBQSxRQUFBOztJQUVBLGFBQUEsYUFBQTs7O0lBR0EsT0FBQSxRQUFBLFVBQUE7SUFDQSxPQUFBLFFBQUEsZ0JBQUE7SUFDQSxPQUFBLFFBQUEsb0JBQUE7SUFDQSxPQUFBLFFBQUEsY0FBQTs7Ozs7OztBQ2ZBLENBQUEsV0FBQTtFQUNBOztFQUVBO0tBQ0EsT0FBQTtLQUNBLFNBQUEsWUFBQTtLQUNBLFNBQUEsVUFBQTtLQUNBLFNBQUEsVUFBQTs7OztBQ1JBLENBQUEsV0FBQTtFQUNBOztFQUVBO0tBQ0EsT0FBQTtLQUNBLE9BQUE7OztFQUdBLFNBQUEsWUFBQSxnQkFBQSxvQkFBQTtJQUNBO09BQ0EsTUFBQSxRQUFBO1FBQ0EsS0FBQTtRQUNBLGFBQUE7UUFDQSxZQUFBO1FBQ0EsY0FBQTs7O0lBR0EsbUJBQUEsVUFBQTs7Ozs7O0FDakJBLENBQUEsV0FBQTtFQUNBO0VBQ0E7S0FDQSxPQUFBO0tBQ0EsSUFBQTs7O0VBR0EsU0FBQSxTQUFBLE1BQUE7O0lBRUEsS0FBQSxNQUFBOzs7Ozs7QUNUQSxDQUFBLFdBQUE7RUFDQTs7RUFFQTtLQUNBLE9BQUE7S0FDQSxXQUFBLGtCQUFBOzs7RUFHQSxTQUFBLGlCQUFBO0lBQ0EsSUFBQSxLQUFBOzs7OztBQ1RBLENBQUEsV0FBQTtFQUNBOztFQUVBO0tBQ0EsT0FBQTtLQUNBLFVBQUEsZ0JBQUE7OztFQUdBLFNBQUEsYUFBQSxVQUFBO0lBQ0EsSUFBQSxZQUFBO01BQ0EsVUFBQTtNQUNBLE9BQUE7UUFDQSxhQUFBOztNQUVBLFVBQUE7TUFDQSxNQUFBO01BQ0EsWUFBQTtNQUNBLGNBQUE7OztJQUdBLE9BQUE7O0lBRUEsU0FBQSxTQUFBLE9BQUEsSUFBQSxNQUFBLElBQUE7TUFDQSxJQUFBO01BQ0EsSUFBQSxTQUFBLFNBQUEsR0FBQSxJQUFBO1FBQ0EsV0FBQTtRQUNBLGFBQUE7UUFDQSxZQUFBO1FBQ0EsTUFBQTtRQUNBLFNBQUE7OztNQUdBLEdBQUEsU0FBQTs7TUFFQSxRQUFBLFFBQUEsR0FBQSxPQUFBLFNBQUEsT0FBQTtRQUNBLE9BQUEsS0FBQSxPQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQWVBLFNBQUEscUJBQUE7TUFDQSxJQUFBLEtBQUE7O01BRUEsR0FBQSxRQUFBLENBQUEsV0FBQSxhQUFBLFdBQUEsT0FBQSxjQUFBLFNBQUEsT0FBQSxRQUFBOzs7Ozs7O0FBTUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NpdGV6b3JkJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCddKTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzaXRlem9yZCcpXG4gICAgLmNvbmZpZyhjb25maWcpO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyKSB7XG4gICAgLy8gRW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgICB0b2FzdHIub3B0aW9ucy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHIub3B0aW9ucy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gICAgdG9hc3RyLm9wdGlvbnMucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIHRvYXN0ci5vcHRpb25zLnByb2dyZXNzQmFyID0gdHJ1ZTtcbiAgfVxuXG59KSgpO1xuIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCB0b2FzdHI6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NpdGV6b3JkJylcbiAgICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gICAgLmNvbnN0YW50KCd0b2FzdHInLCB0b2FzdHIpXG4gICAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NpdGV6b3JkJylcbiAgICAuY29uZmlnKHJvdXRlQ29uZmlnKTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGZ1bmN0aW9uIHJvdXRlQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYWluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgICAgfSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2l0ZXpvcmQnKVxuICAgIC5ydW4ocnVuQmxvY2spO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuXG4gICAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG4gIH1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzaXRlem9yZCcpXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NpdGV6b3JkJylcbiAgICAuZGlyZWN0aXZlKCd6b3JkTWFsYXJrZXknLCB6b3JkTWFsYXJrZXkpO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZnVuY3Rpb24gem9yZE1hbGFya2V5KG1hbGFya2V5KSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgICB2YXIgd2F0Y2hlcjtcbiAgICAgIHZhciB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgcG9zdGZpeDogJyAnXG4gICAgICB9KTtcblxuICAgICAgZWwuYWRkQ2xhc3MoJ3pvcmQtbWFsYXJrZXknKTtcblxuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLnN0dWZmLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24oY29udHJpYnV0b3IpIHtcbiAgICAgIC8vICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KTtcblxuICAgICAgLy8gc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgd2F0Y2hlcigpO1xuICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgIHZtLnN0dWZmID0gWydMYXJhdmVsJywgJ0FuZ3VsYXJKUycsICdDb3Jkb3ZhJywgJ1BIUCcsICdKYXZhc2NyaXB0JywgJ0hUTUw1JywgJ0NTUycsICdTQVNTJywgJ0Jvb3RzdHJhcCddO1xuICAgIH1cblxuICB9XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
