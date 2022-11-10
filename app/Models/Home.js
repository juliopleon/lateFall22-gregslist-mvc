import { generateId } from "../Utils/generateId.js"

export class Home {
    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl

    }

    get cardTemplate() {
        return `
        <div class="col-4 p-4">
          <div class="card">
            <img
              src="${this.imgUrl}"
              class="card-img-top" alt="vue">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between mb-2">
                <span>${this.name}</span>
                <span>$${this.price}</span>
              </h5>
              <button class="btn btn-primary">
                ${this.description}
              </button>
            </div>
          </div>
        </div>
        `
    }

    get activeCardTemplate() {
        return `
        
        `
    }






}
