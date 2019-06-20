import Tech from "../models/tech.js";


let _state = {
    techs: []
}
_state.techs.push(new Tech({ type: 'phone', brand: 'samsung', description: 'smartphone', price: '6,000' }))

let _subscribers = {
    techs: []
}

function setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
}

export default class TechService {
    constructor() {
        console.log('Tech Service works')
    }
    get Tech() {
        return _state.techs.map(tech => new Tech(tech))
    }

    addSubscribers(propName, fn) {
        _subscribers[propName].push(fn)
    }
    addTech(newTech) {
        let temp = this.Tech
        temp.push(new Tech(newTech))
        setState("techs", temp)
    }
}
