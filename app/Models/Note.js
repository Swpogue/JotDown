import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Note {
  constructor(data) {
    this.noteId = data.noteId || generateId()
    this.noteName = data.noteName
    this.noteBody = data.noteBody || '';
    this.userName = appState.userName;
    this.color = data.color;
    // 
  }

  get NotesTemplate() {
    
    return `
    <div class="col-4">
      <p onclick="app.notesController.setActive('${this.noteId}')">Title-${this.noteName} <button style="background-color: ${this.color};"></button></p>
      </div>`
    }
    // TODO Save data
    get ActiveTemplate(){
      return `<form onsubmit="app.notesController.saveNoteBody()">
      <textarea type="text" id="noteBody" name="noteBody" class="w-100" cols="30" rows="15">${this.noteBody}</textarea>
      <button type= "submit">Save </button>
      <button class="btn btn-danger" onclick="app.notesController.deleteNote('${this.noteId}')">Delete Note</button>
    </form>`

  }



}