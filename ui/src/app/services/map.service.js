/* @ngInject */

export default
angular.module('flight')
  .service('MapService', function ($http, apiUrl) {

    this.markers = []

    this.addMarker = (marker) => this.markers.push(marker)

    //this.selectedCities = []

    this.getMarkers = () => {
      //console.log('SENDING MARKERS:' + this.markers[0].title)
      //console.log(this.markers)
      return this.markers
    }

    this.twoMarkersToSinglePath = () => {
      const markers = this.getMarkers()
      if (markers.length !== 2) {console.log('MORE/LESS THAN TWO MARKERS'); return [[0,0],[0,0]]}
      const path = [
          [
            markers[0].position[0], markers[0].position[1]
          ],
          [
            markers[1].position[0], markers[1].position[1]
          ]
        ]
        //console.log('PATH')
        //console.log(path)
        return path

    }

    this.savePotentialFlightToProfile = () => {
      ProfileService.saveItinerary([this.potentialFlight])
      this.potentialFlight = {}
      $state.go('profile')
    }

    this.potentialFlight = {}

    this.setPotentialFlight = (flight) => {
      this.potentialFlight = flight
      this.addSelectedCities([flight.origin, flight.destination])
    }

    this.addSelectedCities = (array) => {
      array.forEach((x) => this.getMarkerByCityName(x))
    }

    //this.getSelectedCities = () => selectedCities

    this.clearMarkers = () => this.markers = []

    this.getMarkerByCityName = (name) => {
      return $http
        .get(`${apiUrl}/location/name`, { params: { name } })
        .then((data) => {
          const newMarker = {title:'', position:[]}
          newMarker.title = data.data.city
          newMarker.position = [data.data.latitude, data.data.longitude]
          //console.log('NEWMARKER:')
          //console.log(newMarker)

          this.addMarker(newMarker)
        })
    }
  })
