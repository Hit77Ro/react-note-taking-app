export default function NoteSettings() {
  return (
    <div class="note-settings">
      <button class="menu-toggler">
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <div class="note-menu">
        <button class="note-edit btn">
          <i class="fas fa-edit"></i> <span class="text">edit</span>
        </button>
        <button class="note-delete btn">
          <i class="fas fa-trash"></i> <span class="text">delete</span>
        </button>
      </div>
    </div>
  );
}
