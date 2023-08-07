import { useEffect, useState } from "react";
import getCurrentDateTime from "./getcurrentdate";
// Form.jsx
export default function Form({
  toggleForm,
  setToggleForm,
  handleInParent,
  editingData,
  validator,
  isEditMode,
  notes,
  setNotes,
}) {
  const [inputs, setInputs] = useState({ title: "", description: "" });
  const resetInputs = () => setInputs({ title: "", description: "" });
  const handlSubmit = (e) => {
    e.preventDefault();
    // exporting inputs with new date and id for each submit

    if (!isEditMode)
      handleInParent({
        ...inputs,
        id: crypto.randomUUID(),
        date: getCurrentDateTime(),
      });
    // resetInputs();

    if (isEditMode) {
      if (!validator(inputs)) return;
      handleEdit();
      setToggleForm(false);
    }

    // clearing inputs on submit if fields are valid
    if (validator(inputs)) resetInputs();
    
  };

  const handleEdit = () => {
    const index = notes.findIndex((obj) => obj.id === editingData.id);
    const newTitle = inputs.title;
    const newDescription = inputs.description;

    const updatedNotes = [...notes];
    // updating the curremt obj ;
    updatedNotes[index] = {
      ...updatedNotes[index],
      title: newTitle,
      description: newDescription,
    };

    setNotes(updatedNotes);
  };
  //setting inputs value to current edited note ;
  useEffect(() => {
    if (editingData) {
      setInputs({
        title: editingData.title,
        description: editingData.description,
      });
    }
  }, [editingData]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // object keys are unique when adding  a new key that existe  ,it overwrite it;
    setInputs((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        // those are unchanged
        // id: crypto.randomUUID(),
        // date: getCurrentDateTime(),
      };
    });
  };
  return (
    <form className={toggleForm ? "form show" : "form"} onSubmit={handlSubmit}>
      <h1 className="header"> add new Note </h1>
      <div className="form-row">
        <label> Note Title </label>
        <input
          value={inputs.title}
          name="title"
          type="text"
          onInput={handleInputChange}
          placeholder="note title"
        />
      </div>
      <div className="form-row">
        <label> Note description </label>
        <input
          value={inputs.description}
          name="description"
          onInput={handleInputChange}
          type="text"
          placeholder="note description"
        />
      </div>
      <div className="form-row form-footer">
        <button className="btn add-note">add note</button>
      </div>
    </form>
  );
}
