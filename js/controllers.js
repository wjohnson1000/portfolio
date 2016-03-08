app.controller('about', ['$scope', 'bioData', function($scope, bioData){
  $scope.about = bioData.about;
}]);
app.controller('landing', ['$scope', 'projectData', '$stateParams', function($scope, projectData, $stateParams){
}])

app.controller('project', ['$scope', 'projectData', '$stateParams', function($scope, projectData, $stateParams){
  $scope.projects = projectData.allProjects;
  //$scope.project = projectData.oneProject($stateParams.name);
}])
