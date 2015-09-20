angular
  .module('portfolio', ['ui.router'])
  .config(MainRouter);

    function MainRouter($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "home.html"
        })
        .state('about', {
          url: "/about",
          templateUrl: "about.html"
        })
        .state('works', {
          url: "/works",
          templateUrl: "works.html"
        })
        .state('skills', {
          url: "/skills",
          templateUrl: "skills.html"
        })
        .state('blog', {
          url: "/blog",
          templateUrl: "blog.html"
        })
        .state('contact', {
          url: "/contact",
          templateUrl: "contact.html"
        });

      $urlRouterProvider.otherwise("/");
    }
