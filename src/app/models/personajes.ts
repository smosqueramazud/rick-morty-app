export interface Personajes {
    info: infoPersonaje,
    results: any
}

export interface infoPersonaje{
    count: number,
    pages: number,
    next: string,
    prev: null
}