"use strict";
var SRP;
(function (SRP) {
    class Database {
        constructor(dbname) {
            this.dbname = dbname;
        }
        static connect(src, dbname) {
            return new Database(dbname);
        }
        save(obj) {
            console.log('saved' + obj.title + ' ' + obj.year);
        }
    }
    class Movie {
        constructor(title, year) {
            this.title = title;
            this.year = year;
            this.movieDb = Database.connect('user:pw@muydb', 'moive');
        }
        getTitle() {
            return this.title + ' (' + this.year + ') ';
        }
        save() {
            this.movieDb.save({ title: this.title, year: this.year });
        }
    }
    class SRPMovie {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        getTitle() {
            return `${this.title} (${this.year})`;
        }
    }
    class MovieRepository {
        constructor() {
            this.db = Database.connect('xxx', 'fsf');
        }
        save(movie) {
            this.db.save(movie);
        }
    }
    function main() {
        const movie = new Movie('The Intership', 2013);
        const moveRepo = new MovieRepository();
        moveRepo.save(movie);
    }
    SRP.main = main;
})(SRP || (SRP = {}));
SRP.main();
//# sourceMappingURL=Srp.js.map