import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";
import { notesService } from "../Services/NotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawNotes() {
  let notes = appState.notes

  let template = ''
  notes.forEach(n => {


    template += n.NotesTemplate;
  })
  console.log(appState.notes.length)
  // appState.notes.length
  setHTML('notesForm', template)

  setHTML('notesBody', appState.activeNote?.ActiveTemplate ?? '');
  setHTML('noteCount', appState.notes.length)
}





export class NotesController {
  constructor() {


    _drawNotes()
    appState.on('notes', _drawNotes)
    appState.on('userName', _drawNotes)
    appState.on('activeNote', _drawNotes)
  }

  createNote() {
    window.event.preventDefault()
    const formHTML = window.event.target
    const formData = getFormData(formHTML)
    notesService.createNote(formData)
    formHTML.reset()
  }

  setActive(noteId) {

    notesService.setActive(noteId)

  }

  saveNoteBody() {
    window.event.preventDefault()
    const formHTML = window.event.target
    const formData = getFormData(formHTML)
    notesService.saveNoteBody(formData.noteBody)

  }
  async deleteNote(noteId) {
    console.log('controller delete', noteId);
    if (await Pop.confirm("Are you sure about that?")) {
       notesService.deleteNote(noteId)
    }
}

}