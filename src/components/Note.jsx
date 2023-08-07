// Note.jsx
export default function Note({
  editNote,
  obj: { title, description, id, date },
}) {
  return (
    <li
      className="note"
      date={date}
      data-id={id}
      onClick={(e) => editNote(e.currentTarget.dataset.id)}
    >
      <h1> {title} </h1>
      <p>{description}</p>
      <span>{date} </span>
    </li>
  );
}
