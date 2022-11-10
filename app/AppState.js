import { Car } from "./Models/Car.js"
import { Home } from "./Models/Home.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null

  activeHome = null
  /** @type {import('./Models/Home').Home[]} */
  // houses = loadState('houses', [Home])
}

houses = [
  new House('1974', 'Mid-Century Modern Single Family Home', 3, 2.5, 1400, 375000, 'Newly renovated mid-century modern home', 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg'),
  new House('2015', 'New Modern Single Family Home', 4, 2.5, 2400, 750000, 'Newly new modern home', 'https://cdn.onekindesign.com/wp-content/uploads/2021/03/California-Modern-Home-In-Texas-Coats-Homes-01-1-Kindesign.jpg'),
]

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

