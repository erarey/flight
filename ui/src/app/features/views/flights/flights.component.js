import templateUrl from './flights.template.html'

export default
angular.module('flight')
  .component('flights', {
    templateUrl,
    controller: function(){

    },
    controllerAs: 'ctrl'

  }
)
