
countriesApp.filter('weDontLike', function () {

    return function (inputArray, nameToExclude) {

        var filteredArray = [];

        for (var i in inputArray) {
            if (inputArray[i].name != nameToExclude) {
                filteredArray.push(inputArray[i]);
            }
        }

        return filteredArray;

    }

})