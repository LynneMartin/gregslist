import House from "../models/house.js";


let _houses = [
    new House({size: '3,400 Sq ft', color: "White", year: 1991}),
    new House({size: '1,800 Sq ft', color: "Navy Blue", year: 2010})
]


export default class HouseService{  
    constructor(){
        console.log('service says hi', _houses)
    }

    get Houses(){
        return _houses.map(house => new House(house))
    }

    addHouse(newHouse){
        _houses.push(new House(newHouse))
    }
}