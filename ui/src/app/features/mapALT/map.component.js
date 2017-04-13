import templateUrl from './map.template.html'

/* @ngInject */

export default
angular.module('flight')
  .component('mapALT', {
    templateUrl,
    controller: function (MapService, $q) {
      this.zoom = 6

      this.paths = MapService.getLastPath()

      this.setPaths = (x) => this.paths = x

      this.getPaths = () => MapService.getLastPath()
      
      this.getMarkers = () => MapService.getMarkers()

      this.center = [36.1627,-86.7816]

      this.saveFlightToProfile = () => MapService.savePotentialFlightToProfile()

    },
    controllerAs: 'ctrl'

  }
)
/*
memphis: {
  latitude: 35.1495,
  longitude: -90.0490
},

nashville: {
  latitude: 36.1627,
  longitude: -86.7816
},

knoxville: {
  latitude: 35.9606,
  longitude: -83.9207
}
}*/
