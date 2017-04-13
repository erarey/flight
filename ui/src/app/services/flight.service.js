export default
angular.module('flight')
  .service('FlightService', function($log, $http, $q, apiUrl){
    let flights = []

    this.getFlights = () => {
      return $http
        .get(`${apiUrl}/flights`)
        .then(
          (success) => { return success.data},
          (error) => { return error.data }
        )
    }
})
