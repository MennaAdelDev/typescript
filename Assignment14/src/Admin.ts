import { User } from "./User";
import type { NoteBook } from "./NoteBook";

export class Admin extends User {
  manageNotes(
    notebook: NoteBook,
    action: "view" | "remove",
    noteId?: number
  ): void {
    if (action === "view") {
      notebook
        .getNotes()
        .forEach((note) =>
          console.log(`${note.id} - ${note.title}: ${note.preview()}`)
        );
      return;
    }
    if (noteId !== undefined) {
      notebook.removeNote(noteId);
    }
  }
}
