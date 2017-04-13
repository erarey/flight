import templateUrl from './flights.template.html'

export default
angular.module('flight')
  .component('flights', {
    templateUrl,
    controller: function ($state, FlightService, MapService, ProfileService, $interval, $scope) {

      this.flights = []
      this.destinations = []
      this.origins = []

      this.refresh // for interval

      this.getLoggedIn = () => ProfileService.getLoggedIn()

      this.pickedDirectFlight = (flight) => {
        MapService.setPotentialFlight(flight)
        //this.addSelectedCities(origin, destination)
        $state.go('map')
      }

      this.addSelectedCities = (origin, destination) => {
        //console.log('ORIGIN: ' + origin + ' DESTINATION: ' + destination)
        MapService.clearMarkers()
        MapService.addSelectedCities([origin, destination])}

      this.getFlights = () => {
        this.flights = []
        this.destinations = []
        this.origins = []
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

          this.refresh = $interval( () => {this.getFlights()}, 5000)
        }



        this.switchInterval()

        if (typeof this.refresh === 'function') this.refresh()

      //this.getFlights = () => {console.log("flights received: "); console.log(FlightService.getFlights())}
    },
    controllerAs: 'ctrl'

  }
)
