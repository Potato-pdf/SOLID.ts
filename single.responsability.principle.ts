/**
 * Single Responsability Principle
 * "Cada elemento se encarga de una cosa en especifico"
 * 
 * Ventajas:
 *  Testing
 *  Lowe Copupling(dependencia minima entre elementos)
 *  Organization
 */


/**
 * No aplicada
 */

class VideoGame {
    private name :string;
    private price : number;
    private realeaseDate: string;

    constructor(name : string, price:number, realeaseDate:string){
    this.name = name;
    this.price = price;
    this.realeaseDate=realeaseDate;}

    public getName(): string {
        return this.name
    }
    public getPrice(): number{
        return this.price;
    }
    public getReleaseDate(): string {
        return this.realeaseDate;
    }
}

class VideoGameStore{
    private videoGames : VideoGame[];

    constructor(videoGames: VideoGame[]){
        this.videoGames = videoGames;
    }

    public getAllVideoGameByReeaseDate(date: string){
        return this.videoGames.filter((game)=> game.getReleaseDate()===date);
    }

    public getAllGamesByHigerPrice(price: number){
        return this.videoGames.filter((game) => game.getPrice() > price)
    }
    
    public getAllGamesByLowerPrice(price: number){
        return this.videoGames.filter((game) => game.getPrice() < price)
    }

}

//////////////////////////////////////////////////////////////////////////////////



/**
 * Aplicada
 */

class VideoGameStoreGetter{
    public getAllVideoGameByReeaseDate(date: string, videoGames: VideoGame[]){
        return videoGames.filter((game)=> game.getReleaseDate()===date);
    }

    public getAllGamesByHigerPrice(price: number, videoGames: VideoGame[] ){
        return videoGames.filter((game) => game.getPrice() > price)
    }
    
    public getAllGamesByLowerPrice(price: number, videoGames: VideoGame[]){
        return videoGames.filter((game) => game.getPrice() < price)
    }
}

class BetterVideoGameStore extends VideoGameStoreGetter{
    private videoGames : VideoGame[];

    constructor(videogames: VideoGame[]){
        super();
        this.videoGames = videogames
    }
}
/**
 * Al separar las responsabilidades, podemos extender como queramos
 */
class SecondBetterVideoGameStore extends VideoGameStoreGetter{
    private videoGames : VideoGame[];

    constructor(videogames: VideoGame[]){
        super();
        this.videoGames = videogames
    }
}