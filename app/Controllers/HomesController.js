import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";



function _drawHomes() {
    let template = ` `
    appState.houses.forEach(h => template += h.CardTemplate)
    setHTML('listings', template)
}

export class HomesController {
    constructor() {
        appState.on('houses', _drawHomes)
    }

    showHomes() {
        _drawHomes()
    }
}




























