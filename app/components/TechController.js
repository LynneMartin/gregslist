import TechService from "./TechService.js";


let _techService = new TechService

function draw() {
    // techElem is the location in the HTML with the '#tech'
    let techElem = document.querySelector("#tech")
    let template = ""
    let techs = _techService.Tech
    techs.forEach(tech => {
        template += tech.Template
    })
    techElem.innerHTML = template
}


export default class TechController {
    constructor() {
        console.log("tech controller works")
        _techService.addSubscribers("techs", draw)
    }
    addTech(e) {
        e.preventDefault()
        let form = e.target

        let newTech = {
            type: form.type.value,
            brand: form.brand.value,
            description: form.description.value,
            price: form.price.value
        }
        _techService.addTech(newTech)
        form.reset()
    }
}