countriesApp

    .controller('ExampleController', ['$scope',
        function ($scope) {

            $scope.numbers = [1, 2, 3, 4, 5, 6];



            $scope.event = {
                name: 'Introduction to AngularJS',
                date: '24/7/2014',
                time: '15:00 PM (or whatever. I forgot the starting time when I made the presentation)',
                imageUrl: 'app/style/images/AngularJS-large.png'
            }

        }])
