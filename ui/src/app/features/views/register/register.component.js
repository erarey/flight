import templateUrl from './register.template.html'

export default
angular.module('flight')
  .component('register', {
    templateUrl,
    controller: function($log, ProfileService, $q) {
      $log.debug('Register controller is a go.')
      /*
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
      */

      this.lastError = ''

      /*
      this.form = {
        credentials: {username: '', password: ''},
        firstName: '',
        lastName: '',
        address: '',
        email: ''
      }
      */

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

      this.newUser = (form) => {
        if (!form || !form.username || !form.password) {
          this.lastError = 'Please enter a username and password.'
          return
        }

        let profile = {}
        profile.credentials = {username:form.username, password:form.password}
        profile.firstName = form.firstName || ''
        profile.lastName = form.lastName || ''
        profile.address = form.address || ''
        profile.email = form.email || ''
        profile.phone = form.phone || ''

        $q.when(ProfileService.newUser(profile))
            .then((response) => {
              if (response.data.error) {
                console.log('showing error: ' + response.data.error)
                this.lastError = response.data.message
              }
              else {
                ProfileService.setLoggedIn(true); console.log('LOGGED IN? ' + ProfileService.getLoggedIn())
              }
            })
      }

      this.register = (form) => this.newUser(form)//this.newUser(form)

      this.setLoggedIn = (bool) => ProfileService.setLoggedIn(bool)

      this.getLoggedIn = () => ProfileService.getLoggedIn()

    },
    controllerAs: 'ctrl'

}
)
