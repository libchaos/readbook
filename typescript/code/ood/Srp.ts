namespace SRP { //单一职责
  interface MovieInterface {
    title: string
    year: number
  }
  class Database {

    static connect(src: string, dbname: string): Database{
      return new Database(dbname)
    }
    constructor(private dbname: string) {

    }

    save(obj: MovieInterface): void {
      console.log('saved' + obj.title + ' '+  obj.year);
    }

  }
  class Movie {
    private movieDb: Database
    constructor(public title: string, public year: number) {
      this.movieDb = Database.connect('user:pw@muydb', 'moive')
    }
    getTitle() {
      return this.title + ' (' + this.year + ') '
    }
    save() {
      this.movieDb.save({title: this.title, year: this.year})
    }
  }


  class SRPMovie {
    constructor(public title: string, public year: number) {

    }
    getTitle() {
      return `${this.title} (${this.year})`
    }
  }
  class MovieRepository {
    private db: Database
    constructor() {
      this.db = Database.connect('xxx', 'fsf')
    }
    save(movie: SRPMovie) {
      this.db.save(movie)
    }
  }

  export function main() {
    const movie = new Movie('The Intership', 2013)
    const moveRepo = new MovieRepository()
    moveRepo.save(movie)
  }

}
SRP.main()

