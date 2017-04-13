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
    let password = ''
    let loggedIn = false

    this.login = (credentials) => {
      return $http
        .post(`${apiUrl}/user/login`, {username: credentials.username, password: credentials.password})
        .then(
          (success) => {
            this.setUsername(credentials.username)
            this.setPassword(credentials.password)
            this.setLoggedIn(true)
            return success
          },
          (error) => { console.log('ERROR:'); console.log(error); return error })
    }

    this.newUser = (form) => {
      return $http
        .post(`${apiUrl}/user/newUser`, form)
        .then(
          (success) => {
            this.setUsername(form.credentials.username);
            this.setPassword(form.credentials.password)
            this.setLoggedIn(true);return success
          },
          (error) => {console.log('ERROR:'); console.log(error); return error})
    }

    this.saveItinerary = (itin) => {
      console.log('PROFILESERVICE--ITINERARY TO SAVE: ')
      console.log(itin)
      return $http
        .post(`${apiUrl}/user/postNewFlight`, {credentials: {username: username, password: password}, itinerary: itin})
        .then(success => console.log(success), (error) => console.log(error))
    }

    this.getProfileByUsername = (username) => {
      return $http
        .post(`${apiUrl}/user/test/${username}`, {username: username, password: 'test'})
        .then(success => success.data.firstName, (error) => error)
    }

    this.setUsername = (u) => { username = u }
    this.setPassword = (p) => { password = p }

    this.getUsername = () => username

    this.getLoggedIn = () => loggedIn

    this.setLoggedIn = (value) => { loggedIn = value }
  })
