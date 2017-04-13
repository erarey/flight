/* @ngInject */

export default
angular.module('flight')
  .service('MapService', function ($http, apiUrl) {
    this.getMarkerByCityName = (name) => {
      return this.$http
        .get(`${this.apiUrl}/location/name`, { params: { name } })
        .then(result => result.data)
    }

  })
