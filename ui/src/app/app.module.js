import apiUrl from './api.url'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',
      'ngMap'
    ])
    .constant('apiUrl', apiUrl)
    .name
