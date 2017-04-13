export default
  angular.module('flight')

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('register', {
      url: '/user/register',
      component: 'register'
    })

    $stateProvider.state('login', {
      url: '/user/login',
      component: 'login'
    })

    $stateProvider.state('profile', {
      url: '/user/profile',
      component: 'profile'
    })

    $stateProvider.state('splashALT', {
      url: '/',
      component: 'splashALT'
    })

    $stateProvider.state('legal', {
      url: '/legal',
      component: 'legal'
    })

    $stateProvider.state('flights', {
      url: '/flights',
      component: 'flights'
    })

    $stateProvider.state('shop', {
      url: '/shop',
      component: 'shop'
    })
  }
  ]
)
