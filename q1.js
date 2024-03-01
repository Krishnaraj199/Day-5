class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}


class Movie2 {
    // ... (constructor as defined above)

    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
