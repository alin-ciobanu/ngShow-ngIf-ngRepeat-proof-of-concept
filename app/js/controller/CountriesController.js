countriesApp

.controller('CountriesController', ['$scope', '$timeout', '$http',
    function ($scope, $timeout, $http) {

        var countriesSuccessCallback = function (data) {
            $scope.countries = data;
        }

        var countriesErrorCallback = function (response) {
            alert("error fetching countries");
        }

        $http.get('countries.json')
            .success(countriesSuccessCallback)
            .error(countriesErrorCallback);

        $scope.ICONS_PATH = 'app/style/icons/';

        $scope.event = {
            name: 'Introduction to AngularJS',
            date: '24/7/2014',
            time: '15:00 PM (or whatever. I forgot the starting time when I made the presentation)',
            imageUrl: 'app/style/images/AngularJS-large.png'
        }


        $scope.countries = [
            {
                name: 'United States',
                stereotype: 'A person who speaks exactly one language is called American.',
                currency: 'USD',
                capitalCity: 'Washington DC',
                flagImage: 'united-states.png',
                isShown: false
            },
            {
                name: 'Germany',
                stereotype: 'We think that Germany is Germany, but Bavaria is not Germany.',
                currency: 'EUR',
                capitalCity: 'Berlin',
                flagImage: 'germany.png',
                isShown: false
            },
            {
                name: 'Russia',
                stereotype: 'There are only 2 seasons in Russia: winter, and nuclear winter.',
                currency: 'Ruble',
                capitalCity: 'Moskva',
                flagImage: 'russia.png',
                isShown: false
            },
            {
                name: 'France',
                stereotype: 'French people make up their language as they go along.',
                currency: 'EUR',
                capitalCity: 'Paris',
                flagImage: 'france.png',
                isShown: false
            },
            {
                name: 'Canada',
                stereotype: 'People live in Canada.',
                currency: 'Canadian Dollar',
                capitalCity: 'Ottawa',
                flagImage: 'canada.png',
                isShown: false
            },
            {
                name: 'Scotland',
                stereotype: 'Never make fun of a Scotsman\'s traditional garb. You could get kilt that way',
                currency: 'Pounds',
                capitalCity: 'Edinburgh',
                flagImage: 'scotland.png',
                isShown: false
            },
            {
                name: 'Netherlands',
                stereotype: 'Amsterdam is like a Tour de France. Just a lot of people on drugs riding bikes.',
                currency: 'EUR',
                capitalCity: 'Amsterdam',
                flagImage: 'netherlands.png',
                isShown: false
            },
            {
                name: 'Italy',
                stereotype: 'If the Berlin wall would have been built by Italians it would have come down on its own.',
                currency: 'EUR',
                capitalCity: 'Rome',
                flagImage: 'italy.png',
                isShown: false
            }
        ];


        $scope.sortableOptions = {
            axis: 'y',
            cursor: 'move',
            opacity: 0.8,
            revert: true
        };

        var updateDate = function () {

            $scope.date = new Date();

            var secondsUntilNextMinute = 60 - $scope.date.getSeconds();

            $timeout(updateDate, secondsUntilNextMinute * 1000 + 10);

        }

        updateDate();

    }])