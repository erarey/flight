import templateUrl from './map.template.html'

/* @ngInject */

export default
angular.module('flight')
  .component('mapALT', {
    templateUrl,
    controller: function (MapService, $q) {
      this.zoom = 6

      this.path = [[36.1627,-86.7816],[50.1627,-86.7816]]

      this.getMarkers = () => MapService.getMarkers()

      this.center = [36.1627,-86.7816]

      this.saveFlightToProfile = () => MapService.savePotentialFlightToProfile()

      this.twoMarkersToSinglePath = () => {
        //console.log("TWOMARKERS: ")
        //console.log(MapService.twoMarkersToSinglePath())
        this.path = MapService.twoMarkersToSinglePath()
        return MapService.twoMarkersToSinglePath()
      }

      //this.addMarker('Knoxville', [35.9606, -83.9207])

      /*this.addMarkerFromDatabase = (city) =>
        MapService.getMarkerByCityName(city)
          .then((data) => {
            const newMarker = {title:'', position:[]}
            newMarker.title = data.data.city
            newMarker.position = [data.data.latitude, data.data.longitude]
            console.log(newMarker)
            this.addMarker(newMarker)
          }
        )
        */
        //this.addMarkerFromDatabase('Memphis')
        this.twoMarkersToSinglePath()
    },
    controllerAs: 'ctrl',
    bindings: {

    }

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
