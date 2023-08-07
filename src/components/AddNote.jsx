// AddNote.jsx
export default function AddNote({ showForm }) {
  return (
    <>
      <div className="add-box" onClick={showForm}>
        <button className="add-btn">
          <i className="fas fa-plus"></i>
        </button>
        <h1> add new note</h1>
      </div>
    </>
  );
}
