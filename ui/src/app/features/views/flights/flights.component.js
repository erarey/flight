import templateUrl from './flights.template.html'

export default
angular.module('flight')
  .component('flights', {
    templateUrl,
    controller: function (FlightService, ProfileService, $interval, $scope) {

      this.flights = []
      this.destinations = []
      this.origins = []

      this.getFlights = () => {
      this.flights = []
      this.destinations = []
      this.origins = []

      this.refresh // for interval

      this.getLoggedIn = () => ProfileService.getLoggedIn()

      FlightService.getFlights()
         .then((data) => {
            const flightList = []
            data.forEach(function (element) {
              flightList.push(element)
            })
            console.log(flightList)
            this.flights = flightList
            this.flights.forEach((x) => {
              if (this.destinations.indexOf(x.destination) === -1) {
                this.destinations.push(x.destination)
              }
            })
            this.flights.forEach((x) => {
              if (this.origins.indexOf(x.origin) === -1) {
                this.origins.push(x.origin)
              }
            })
          })
        }

        $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          if (typeof this.refresh === 'function') $scope.switchInterval();
        });

        this.switchInterval = () => {
          if (angular.isDefined(this.refresh)) {
            $interval.cancel(this.refresh)
            this.refresh = undefined
          }

          this.refresh = $interval( () => {console.log('refreshing...'); this.getFlights()}, 500000)
        }



        this.switchInterval()

        if (typeof this.refresh === 'function') this.refresh()

      //this.getFlights = () => {console.log("flights received: "); console.log(FlightService.getFlights())}
    },
    controllerAs: 'ctrl'

  }
)
