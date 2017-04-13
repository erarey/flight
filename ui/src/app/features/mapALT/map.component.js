import templateUrl from './map.template.html'

/* @ngInject */

export default
angular.module('flight')
  .component('mapALT', {
    templateUrl,
    controller: function (MapService, $q) {
      this.zoom = 6

      this.center = [36.1627,-86.7816]

      this.markers = []

      this.addMarker = (marker) => this.markers.push(marker)

      this.addMarker('Knoxville', [35.9606, -83.9207])

      this.addMarkerFromDatabase = (city) =>
        MapService.getMarkerByCityName(city)
          .then((data) => {
            const newMarker = {title:'', position:[]}
            newMarker.title = data.data.city
            newMarker.position = [data.data.latitude, data.data.longitude]
            console.log(newMarker)
            this.addMarker(newMarker)
          }
        )

        console.log(this.addMarkerFromDatabase('Memphis'))
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
