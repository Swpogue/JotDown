import { appState } from "../AppState.js";
import { loadState } from "../Utils/Store.js";
import {Note} from "../Models/Note.js"





class UserService {
  getUserName(input) {
    appState.userName = input
    appState.notes = loadState(appState.userName, [Note])
    appState.emit('notes')
  }
}
export const userService = new UserService()