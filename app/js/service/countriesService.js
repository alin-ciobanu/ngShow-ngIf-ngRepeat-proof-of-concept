
countriesApp

.factory('CountriesService', function () {

        var countries = [
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

        var add = function (item) {
            countries.push(item);
        }

        return {
            countries: countries,
            add: add
        };

    })