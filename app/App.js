import { NotesController } from "./Controllers/NotesController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  userController = new UserController();
  notesController = new NotesController();

}

window["app"] = new App();
