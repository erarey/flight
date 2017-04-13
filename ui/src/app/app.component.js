import templateUrl from './app.component.html'

/* @ngInject */
/*
class AppController {
  constructor ($log, ProfileService, $scope) {
    $log.debug('AppController is a go.')
    this.getUserTest = function (testmsg) {
      $log.debug('getUserTest firing ' + testmsg)
      ProfileService.getProfileByUsername(testmsg)
    }
    this.testdatabasereturn = ProfileService.gettestdatabasereturn()
    $scope.$watch('testdatabasereturn', () => {console.log('saw it!')})

  }
}
*/

export default { // component
  templateUrl,
  controller: function (ProfileService) {

    this.getUsername = () => ProfileService.getUsername()
  },
  controllerAs: 'ctrl'
}
