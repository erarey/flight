/* @ngInject */

export default
angular.module('flight')
  .service('MapService', function ($http, apiUrl) {
    this.getMarkerByCityName = (name) => {
      return $http
        .get(`${apiUrl}/location/name`, { params: { name } })
        .then(result => {console.log(result); return result})
    }
  })
