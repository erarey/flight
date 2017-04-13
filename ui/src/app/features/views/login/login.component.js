import templateUrl from './login.template.html'

export default
angular.module('flight')
  .component('login', {
    templateUrl,
    controller: function (ProfileService, $q) {
      this.login = (form) => {
        if (!form || !form.username || !form.password) {
          this.lastError = 'Please enter a username and password.'
          return
        }
        $q.when(ProfileService.login(form))
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

      this.setLoggedIn = (bool) => ProfileService.setLoggedIn(bool)

      this.getLoggedIn = () => ProfileService.getLoggedIn()
    },
    controllerAs: 'ctrl'

  }
)
