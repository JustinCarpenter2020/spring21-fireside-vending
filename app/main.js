// import ValuesController from "./Controllers/ValuesController.js";

import VendingController from "./Controllers/VendingController.js";

class App {
  // valuesController = new ValuesController();
  vendingController = new VendingController();
}

window["app"] = new App();
