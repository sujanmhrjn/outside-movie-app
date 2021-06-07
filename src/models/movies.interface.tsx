export type ImageWidth = "w200" | "w400";
interface director {name: string, photoUrl: string, description: string}
interface MovieBase extends director {
    id: string
    overview: string
    title: string
    director: Array<director>
    poster: string
    release_date: number
    genres: Array<string>
}
 

export { MovieBase, director } 