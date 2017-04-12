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
  controller: function($log, ProfileService) {
    $log.debug('AppController is a go.')

    this.getUserTest = function (testmsg) {
      //$log.debug('getUserTest firing ' + testmsg)
      ProfileService.getProfileByUsername(testmsg)
        .then((data) => {
              if (data.data.message) { // error
                this.testdatabasereturn = data.data.message
              }
              else {
                console.log('door 2 please')
              }
            }
          )
    }

    this.testdatabasereturn = 'loading...'

    this.gettestdatabasereturn = () => this.testdatabasereturn

    this.settestdatabasereturn = (x) => this.testdatabasereturn = x

  },
  controllerAs: '$appCtrl'
}
