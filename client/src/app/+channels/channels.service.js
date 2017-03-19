;(function () {
  'use strict';

  angular
   .module('app.channels')
   .factory('Channels', Channels);

  /* @ngInject */
  function Channels($q, $http) {

    return {
      getRepos: getRepos
    };

    function getRepos(userId) {
      let deferred = $q.defer();
      
      
      let githubUrl = `https://api.github.com/users/${userId}/repos`;

      $http
        .get(githubUrl)
        .then((res) => deferred.resolve(res.data))
        .catch(deferred.reject);

      return deferred.promise;

    }
  }
})();