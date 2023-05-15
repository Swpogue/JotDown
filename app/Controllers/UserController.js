import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";
import { userService } from "../Services/UserService.js";

export class UserController {
  constructor() {
    this.getUserName();
  }

  async getUserName() {
    let input = await Pop.prompt("What's your username?", true);
   
   userService.getUserName(input)

  }
}
