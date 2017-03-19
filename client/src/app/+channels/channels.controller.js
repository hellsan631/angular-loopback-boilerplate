/* global Raven:false */

;(function() {
  'use strict';

  angular
    .module('app.channels')
    .controller('ChannelsController', Controller);

  /* @ngInject */
  function Controller(Channels) {
    let vm = this;

    Channels
      .getRepos('hellsan631')
      .then((res) => {
        console.log(res);
        vm.repos = res;
      });
  }
})();
