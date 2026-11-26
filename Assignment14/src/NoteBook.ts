import { Note } from "./Note";
import type { User } from "./User";

export class NoteBook {
  public id: number;
  public title: string;
  private notes: Note[] = [];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  addNote(id: number, title: string, content: string, author: User): Note {
    const note = new Note(id, title, content, author);
    this.notes.push(note);
    return note;
  }

  removeNote(id: number): boolean {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) return false;
    this.notes.splice(index, 1);
    return true;
  }

  getNotes(): Note[] {
    return [...this.notes];
  }
}
