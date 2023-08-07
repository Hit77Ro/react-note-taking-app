//App.jsx
import "../scss/style.scss";
import NotesList from "./NotesList";
import Form from "./Form";
import { useEffect, useState } from "react";

function App() {
  const [toggleForm, setToggleForm] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [notes, setNotes] = useState(() =>
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );
  // show and hide form
  const showForm = () => {
    setToggleForm(true);
    setIsEditMode(false);
  };

  // form validator
  const validator = (obj) => {
    const title = obj.title.trim();
    const description = obj.description.trim();

    if (title && description) return true;
    return false;
  };
  // submit form function
  const submitForm = (notes) => {
    if (!validator(notes)) return;
    // if (!editMode) {
    setNotes((prev) => [...prev, notes]);
    // }
    setToggleForm(false);
  };
  // setting localstorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const editNote = (uid) => {
    const obj = notes.find((obj) => obj.id === uid);
    setToggleForm(true);
    setEditingData(obj);
    setIsEditMode(true);
  };

  const setNotesInForm = (notes) => {
    setNotes(notes);
  };
  return (
    <>
      <main className="app">
        <div className="container">
          <Form
            resetEditingData={setEditingData}
            setNotes={setNotesInForm}
            editingData={editingData}
            validator={validator}
            toggleForm={toggleForm}
            setToggleForm={setToggleForm}
            handleInParent={submitForm}
            isEditMode={isEditMode}
            notes={notes}
          />
          <NotesList editNote={editNote} showForm={showForm} notes={notes} />
        </div>
      </main>
      <div
        className={toggleForm ? "overlay show" : "overlay"}
        onClick={() => {
          setToggleForm(false);
          setIsEditMode(false);
        }}
      ></div>
    </>
  );
}

export default App;
