import templateUrl from './profile.template.html'

export default
angular.module('flight')
  .component('profile', {
    templateUrl,
    controller: function($log, ProfileService, $q) {
      $log.debug('Profile controller is a go.')

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

      this.username = 'Silly'
      this.password = 'Giant'

      this.firstName = 'a'
      this.lastName = 'b'
      this.address = 'c'
      this.email = 'd'

      this.lastError = ''

      this.form = {
        credentials: {username: '', password: ''},
        firstName: 'first',
        lastName: 'last',
        address: '',
        email: ''
      }

      this.login = () => {
        ProfileService.login({username: this.username, password: this.password})
          /*.then((data) => {
            if (data.data.message) { // error
              this.testdatabasereturn = data.data.message
            }
            else {
              console.log(data)
              this.username = data.data.username
              ProfileService.setLoggedIn(true)
            }
          })*/
      }

      this.newUser = () => {
            $q.when(ProfileService.newUser(
            {
              credentials: {username: this.username, password: this.password},
              firstName: this.firstName,
              lastName: this.lastName,
              address: this.address,
              email: this.email
            })).then((response) => {
              if (response.data.error)
              {
                console.log('showing error: ' + response.data.error)
                this.lastError = response.data.message
              }
              else {
                ProfileService.setLoggedIn(true); console.log('LOGGED IN? ' + ProfileService.getLoggedIn())

              }
            })
            /*
            if (!(response || response.data.message === undefined)) // a promise
            {
               ProfileService.setLoggedIn(true); console.log('LOGGED IN? ' + ProfileService.getLoggedIn())
            }
            else {
                console.log('DOES THIS EVER FIRE?')
            }
            */
      }

      this.register = (form) => {console.log('anything: '); console.log(form)}

      this.setLoggedIn = (bool) => ProfileService.setLoggedIn(bool)

      this.getLoggedIn = () => ProfileService.getLoggedIn()

      this.testdatabasereturn = 'loading...'

      this.gettestdatabasereturn = () => this.testdatabasereturn

      this.settestdatabasereturn = (x) => this.testdatabasereturn = x

    },
    controllerAs: 'ctrl'

}
)
