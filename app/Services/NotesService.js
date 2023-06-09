import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { loadState, saveState } from "../Utils/Store.js";



function _saveNotes() {
  saveState(appState.userName, appState.notes)
  
}


class NotesService {
  createNote(formData) {
    let newNote = new Note(formData)
    appState.activeNote = newNote
    appState.notes.push(newNote)
    _saveNotes()
    
    
    appState.emit('notes')
  }
  setActive(noteId){
    let foundNote = appState.notes.find(n => n.noteId == noteId)
    appState.activeNote = foundNote
    
    appState.emit('activeNote')
  }

  saveNoteBody(noteBody){

    appState.activeNote.noteBody = noteBody
    _saveNotes()
    
    appState.emit('notes')
  }
  deleteNote(noteId) {
    let noteToDelete = appState.notes.find(n => n.noteId == noteId)
    console.log('delete service', noteToDelete)
    
    appState.notes = appState.notes.filter(n => n.noteId != noteId)
    console.log('FIlter log');
    _saveNotes()
}

}





export const notesService = new NotesService()