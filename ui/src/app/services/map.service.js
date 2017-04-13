/* @ngInject */

export default
angular.module('flight')
  .service('MapService', function ($state, $http, apiUrl, ProfileService, $q) {

    this.markers = []

    this.paths

    this.addMarker = (marker) => this.markers.push(marker)

    this.getLastPath = () => {
      const paths = this.paths
      if (!paths || paths.length < 2) { return undefined }

      return [paths[paths.length-1], paths[paths.length]]
    }

    this.getMarkers = () => {
      console.log('SENDING MARKERS:')
      console.log(this.markers)
      return this.markers
    }

    this.savePotentialFlightToProfile = () => {
      ProfileService.saveItinerary([this.potentialFlight])
      this.potentialFlight = {}
      $state.go('profile')
    }

    this.potentialFlight = {}

    this.setPotentialFlight = (flight) => {
      console.log("M-SERV-PREPARING TO SAVE POTENTIAL FLIGHT IN SERVICE:")
      console.log(flight)
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
          const halfPath = [ newMarker.position[0], newMarker.position[1] ]
          if (!this.paths)
          {
            partialPath = halfPath
          }
          else {
            this.paths = [halfPath, partialPath]
          }
          console.log(this.paths)
          this.addMarker(newMarker)
        })
    }

    let partialPath
  })
