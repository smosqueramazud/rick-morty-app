/** 
* @class personaje 
* @description clase que modela el response de personaje y la informacion del personaje
* @author Sebastian Mosquera
* @date 2022/11/16
*/
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

