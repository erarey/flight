import ProfileService from './profile.service'

export default
  angular
    .module('ProfileModule', [])
    .service('ProfileService', ProfileService)
    .name
