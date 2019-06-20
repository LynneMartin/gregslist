import CarController from "./components/car/CarController.js";
import JobController from "./components/job/JobController.js";


class App {
    constructor() {
        this.controllers = {
            carController: new CarController(),
            jobController: new JobController()
        }
    }
}


import HouseController from "./components/HouseController.js"
import TechController from "./components/TechController.js";


class App {
    constructor() {
        this.controllers = {
            houseController: new HouseController(),
            techController: new TechController()
        }
    }
}

window["app"] = new App()