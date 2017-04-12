/* @ngInject */
/*
class ProfileService {
  constructor ($log, $http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.testdatabasereturn = 'loading...'
  }

  getProfileByUsername (username) {
    return this.$http
      .post(`${this.apiUrl}/user/test/${username}`, {username: 'test', password: 'test'})
      .then(result => result.data.firstName, (error) => error)
  }

  //gettestdatabasereturn(){console.log('gettestdatabasereturn firing'); return this.testdatabasereturn}
}

export default ProfileService
*/
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
    let loggedIn = false

    this.login = (credentials) => {
      return $http
        .post(`${apiUrl}/user/login`, {username: credentials.username, password: credentials.password})
        .then(success => {console.log(success)})

      //console.log(response)
    }

    this.newUser = (wrapper) => {
      return $http
        .post(`${apiUrl}/user/newUser`, wrapper)
        .then(
          (success) => {console.log('RESPONSE:'); console.log(success); return success},
          (error) => {console.log('ERROR:'); console.log(error); return error})

      console.log('RESPONSE ' + response)
    }

    this.getProfileByUsername = (username) => {
      return $http
        .post(`${apiUrl}/user/test/${username}`, {username: username, password: 'test'})
        .then(success => success.data.firstName, (error) => error)
    }

    this.setLoggedIn = (value) => {loggedIn = value}

    this.getLoggedIn = () => loggedIn

  })
