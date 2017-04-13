export default
angular.module('flight')
  .service('FlightService', function($log, $http, $q, apiUrl){
    let flights = []


/*
    this.getAllUsers = function () {
        return $http.get('http://localhost:8080/api/users')
         .then(function success (response) {
           return response.data
         }, function error (response) {
           console.log('FAILED TO GET RETURN FROM METHOD')
         })
      }
      */


    this.getFlights = () => {
      return $http
        .get(`${apiUrl}/flights`)
        .then(
          (success) => { console.log('SUCCESS: '); console.log(success); return success.data},
          (error) => { console.log('ERROR'); console.log(error); return error.data }
        )
    }
})
