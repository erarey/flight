/* @ngInject */
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
