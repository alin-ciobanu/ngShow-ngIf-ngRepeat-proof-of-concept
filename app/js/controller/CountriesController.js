countriesApp

.controller('CountriesController', ['$scope',
    function ($scope) {

        $scope.ICONS_PATH = 'app/style/icons/';

        $scope.event = {
            name: 'Introducere in AngularJS',
            date: '21/7/2014',
            time: '10:30 AM',
            imageUrl: 'app/style/images/AngularJS-large.png'
        }

        $scope.countries = [
            {
                name: 'United States',
                stereotype: 'A person who speaks exactly one language is called American.',
                currency: 'USD',
                flagImage: 'united-states.png',
                isShown: false
            },
            {
                name: 'Germany',
                stereotype: 'We think that Germany is Germany, but Bavaria is not Germany.',
                currency: 'EUR',
                flagImage: 'germany.png',
                isShown: false
            },
            {
                name: 'Russia',
                stereotype: 'There are only 2 seasons in Russia: winter, and nuclear winter.',
                currency: 'Ruble',
                flagImage: 'russia.png',
                isShown: false
            },
            {
                name: 'France',
                stereotype: 'French people make up their language as they go along.',
                currency: 'EUR',
                flagImage: 'france.png',
                isShown: false
            },
            {
                name: 'Canada',
                stereotype: 'People live in Canada.',
                currency: 'Canadian Dollar',
                flagImage: 'canada.png',
                isShown: false
            },
            {
                name: 'Scotland',
                stereotype: 'Never make fun of a Scotsman\'s traditional garb. You could get kilt that way',
                currency: 'Pounds',
                flagImage: 'scotland.png',
                isShown: false
            },
            {
                name: 'Netherlands',
                stereotype: 'Amsterdam is like a Tour de France. Just a lot of people on drugs riding bikes.',
                currency: 'EUR',
                flagImage: 'netherlands.png',
                isShown: false
            },
            {
                name: 'Italy',
                stereotype: 'If the Berlin wall would have been built by Italians it would have come down on its own.',
                currency: 'EUR',
                flagImage: 'italy.png',
                isShown: false
            }
        ];


    }])