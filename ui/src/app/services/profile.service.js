export default
angular.module('flight')
  .service('ProfileService', function($log, $http, $q, apiUrl){
    /* // successful test
    this.getProfileByUsername = (username) => {
      return $http
        .post(`${apiUrl}/user/test/${username}`, {username: 'test', password: 'test'})
        .then(result => result.data.firstName, (error) => error)
    }
    */
    let username = ''
    let loggedIn = false

    this.login = (credentials) => {
      return $http
        .post(`${apiUrl}/user/login`, {username: credentials.username, password: credentials.password})
        .then(
          (success) => {console.log('RESPONSE:'); console.log(success); this.setUsername(credentials.username); this.setLoggedIn(true); return success},
          (error) => {console.log('ERROR:'); console.log(error); return error})
    }

    this.newUser = (form) => {
      return $http
        .post(`${apiUrl}/user/newUser`, form)
        .then(
          (success) => {console.log('RESPONSE:'); console.log(success); this.setUsername(form.credentials.username); this.setLoggedIn(true);return success},
          (error) => {console.log('ERROR:'); console.log(error); return error})

      console.log('RESPONSE ' + response)
    }

    this.getProfileByUsername = (username) => {
      return $http
        .post(`${apiUrl}/user/test/${username}`, {username: username, password: 'test'})
        .then(success => success.data.firstName, (error) => error)
    }

    this.setUsername = (u) => {username = u}

    this.getUsername = () => username

    this.getLoggedIn = () => loggedIn

    this.setLoggedIn = (value) => {loggedIn = value}

  })
