angular
  .module("redlineDirective", [])
  .controller("Controller", [
    "$scope",
    "$sce",
    "documentsService",
    function($scope, $sce, documentsService) {
      const redlinedata = {
        content:
          "<del>deleted</del> <insacc>accepted</insacc> <ins>inserted</ins>"
      };
      redlinedata.html = $sce.trustAsHtml(redlinedata.content);
      $scope.sendAction = action =>
        documentsService.sendAction(
          action,
          redlinedata.html.$$unwrapTrustedValue()
        );
      $scope.redlinedata = redlinedata;
    }
  ])
  .directive("section", function() {
    return {
      restrict: "E",
      templateUrl: "templates/section.html",
      link: function(scope, element, attr) {
        contentElement = angular.element(
          element[0].getElementsByClassName("content")
        );
      }
    };
  });
