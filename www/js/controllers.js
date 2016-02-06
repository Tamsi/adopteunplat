angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('TamCtrl', function($scope, $http) {
  $http.get('https://api.import.io/store/connector/7660522a-7b15-4624-aebb-239277b8f11a/_query?input=webpage/url:http%3A%2F%2Fwww.cuisineactuelle.fr%2Fcontent%2Fsearch%3Fsearch%255Btext%255D%3Dcarre%2Bd%2527agneau%26search%255Btypes%255D%3D%26search%255Bsort%255D%3Dscore%26search%255Bdirection%255D%3Ddesc%26search%255Bpage%255D%3D1&&_apikey=f38f1257a3fd41c5aedd02479c9967270169a52c7ae775929827ab0be2c5d4dbdf3ddb6ce9d71af8edfea5601ec9de30bbb5874e665e75f909ebce55aa3a5e517ae19dcb87bcf49d8734da8eafea27dd').then(function(response){
      console.log(response.data.results);
      $scope.recettes = response.data.results;
  }, function(error){
      //there was an error fetching from the server
  });

   
})
