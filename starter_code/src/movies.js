//Iteration 1: Time Format

function stringToMinutes(string) {
    var arr = string.split('h')
    if (arr.length < 2) {
        arr.unshift("0")
    }
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours * 60 + minutes
}

function turnHoursToMinutes(moviesArr) {
    //we want a movie but in a different way 
    let result = moviesArr.map((movie) => {
        //console.log('movie.genre is' + movie.genre)
        return {
            title: movie.title,
            duration: stringToMinutes(movie.duration),
            genre: movie.genre
        }
    })

    return result
}
turnHoursToMinutes(movies)

//Iteration 2: All rates average

function ratesAverage(array) {
    let resultSum = array.reduce((total, item) => {
        //console.log("total : " + total)
        //console.log("item.rate : " + item.rate)
        let parsedRate = parseFloat(item.rate)
        if (Number.isNaN(parsedRate)) {
            parsedRate = 0
        }
        return total + parsedRate
    }, 0)
    //console.log("resultSum : " + resultSum)
    return parseFloat(resultSum / array.length);
}

//Iteration 3: Drama movies
function dramaMoviesRate(array) {
    let dramaElement = array.filter(el => el.genre.includes('Drama'))
    //console.log(dramaElement);
    if (dramaElement.length === 0) {
        return undefined
    }
    let dramaRateAvg = ratesAverage(dramaElement)
    //console.log(dramaRateAvg)
    //Average 

    return Math.round(dramaRateAvg * 100) * 0.01
}

//Iteration 4: Ordering by the duration
// Defines orderByDuration
// Should return an array > return array
//Should return the element in a single element array
//Return the new array in growing order
//If two movies have the same length, order them alphabetically by their title
function orderByDuration(array) {
    //ES6 function is: xx((parameter) => {})
    array.sort((movie1, movie2) => {
        if (movie1.duration < movie2.duration) {
            return -1
        } else if (movie1.duration > movie2.duration) {
            return 1
        } else {
            //title, alphabetically
            if (movie1.title > movie2.title) {
                return 1
            } else {
                return -1
            }
        }
    })
    return array
}
//sort does a pairwise comparison: first abc to bcd, switches
//[{ title: 'abc' }, { title: 'bcd' }, { title: 'xzy' }]
//then it compares abc to xzy
//[{ title: 'bcd' }, { title: 'abc' }, { title: 'xzy' }]
//1 = true, -1 = false: should I switch them yes or no?
//[{ title: 'bcd' }, { title: 'xzy' }, { title: 'abc' }]

//Iteration 5: Steven Spielberg. The best?
//only the drama movies where Steven Spielberg is the director.
/*Defines howManyMovies
Should return an string
Should return undefined if the array is empty
Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array
Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"
Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"
Should return "Steven Spielberg directed 4 drama movies!"*/
//an IF does NOT necessarily need a following else!!

function howManyMovies(array) {
    if (array.length === 0) {
        return undefined
    }
    let elementDramaSpielberg = array.filter(el => el.director.includes('Steven Spielberg')
        && el.genre.includes('Drama'));
    const spielbergMovies = `Steven Spielberg directed ${elementDramaSpielberg.length} drama movies!`;

    if (elementDramaSpielberg.length > 0) {
        return spielbergMovies;
    } else if (elementDramaSpielberg.length == 0) {
        return spielbergMovies;
    }
}
howManyMovies(movies);

/*Order alphabetically - orderAlphabetically
Defines orderAlphabetically
You should return an array
Only return the title of the movies! Each element should be a string
If there are less than 20 elements, return all of them.
If there are more than 20 elements, return only 20 of them.
You should order them alphabetically.
You should return the top20 after order them alphabetically.*/


function orderAlphabetically(array) {
    let orderTitle = array.map
    array.sort((movies.title) => {
        if(movie1.title < movie2.duration) {
        return -1
    } else if (movie1.duration > movie2.duration) {
        return 1
    } else {
        //title, alphabetically
        if (movie1.title > movie2.title) {
            return 1
        } else {
            return -1
        }
    }
})
return array
}

function orderAlphabetically(array) {
    let titles = array.map(el => {
        return el.title
    })
    newArray = titles.sort((a, b) => {
        if (a > b) {
            return a;
        }
        else if (a < b) {
            return b;
        }
        else {
            return undefined
        }
    })
    return newArray.slice(0, 20)