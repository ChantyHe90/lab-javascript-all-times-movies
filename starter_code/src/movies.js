/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const durationMovie = movies.map(obj => {
    var durationInNumber = (obj.duration).split('h')
    if (durationInNumber.length < 2) {
        durationInNumber.unshift('0')
    }
    var hours = Number(durationInNumber[0])
    var minutes = Number(durationInNumber[1].split("min")[0])

    return hours * 60 + minutes

})
console.log(durationMovie)

// Get the average of all rates with 2 decimals 
const rateInNumber = movies.map(obj => {
    var rateInNumber = parseFloat(obj.rate)
    return rateInNumber
})
console.log(rateInNumber)

const rateSum = rateInNumber.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});

console.log(rateSum)

const rateAvg = rateSum / movies.length
console.log(rateAvg)

// Get the average of Drama Movies
//I dont know how to access the elements in genre 
const movieGenre = movies.filter(movies => movies.genre == 'Drama');

console.log(movieGenre)
//Create a dramaMoviesRate that receive an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.
function dramaMoviesRate(movieGenre) {

}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
