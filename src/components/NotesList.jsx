// NoteList.jsx
import AddNote from "./AddNote";
import Note from "./Note";
export default function NotesList({ showForm, notes, editNote }) {
  return (
    <ul className="notes">
      <AddNote showForm={showForm} />

      {notes.length > 0 ? (
        notes.map((obj) => <Note editNote={editNote} key={obj.id} obj={obj} />)
      ) : (
        <h1>no not yet</h1>
      )}
    </ul>
  );
}
