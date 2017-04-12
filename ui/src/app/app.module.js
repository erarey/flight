import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import profileModule from './profile/profile.module'
export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap,
      profileModule
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .name
