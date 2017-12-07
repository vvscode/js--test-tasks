// change URL while OPTIONS do not allow to use localhost
// const getActionUrl =(action) => `https://testing.smashdocs.net/documents/12345/${action}`
const getActionUrl = action =>
  `https://cors-anywhere.herokuapp.com/https://testing.smashdocs.net/documents/12345/${action}`;

angular.module("Api", []).service("documentsService", [
  "$http",
  function($http) {
    return {
      sendAction(action, content) {
        const promise = $http.post(getActionUrl(action), { content });

        promise.then(console.log).catch(console.error);

        return promise;
      }
    };
  }
]);
