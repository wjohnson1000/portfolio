app.controller('about', ['$scope', 'projectData', function($scope, projectData){
console.log('hello from conrollers');
}]);
app.controller('landing', ['$scope', 'projectData', '$stateParams', function($scope, projectData, $stateParams){
}])

app.controller('project', ['$scope', 'projectData', '$stateParams', function($scope, projectData, $stateParams){
  $scope.projects = projectData.allProjects;
  //$scope.project = projectData.oneProject($stateParams.name);
}])
