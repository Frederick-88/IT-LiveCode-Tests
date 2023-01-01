const completedNotes = [];
const activeNotes = [];
const otherNotes = [];

class NotesStore {
  //add your code here
  addNote(state, name) {
    if (name === undefined || name === null || name === "") {
      throw new Error("Name cannot be empty");
    }
    if (!this.isValid(state)) {
      throw new Error("Invalid state " + state);
    }
    this.getNotesList(state).push(name);
  }

  getNotes(state) {
    if (!this.isValid(state)) {
      throw new Error("Invalid state " + state);
    }
    const notesList = this.getNotesList(state);
    return notesList.length ? notesList : "No Notes";
  }

  getNotesList(state) {
    if (state === "completed") {
      return completedNotes;
    } else if (state === "active") {
      return activeNotes;
    }
    return otherNotes;
  }

  isValid(state) {
    return state === "completed" || state === "active" || state === "others";
  }
}

const logger = (value) => {
  console.log(value);
};

const notesStoreClass = new NotesStore();
notesStoreClass.addNote("active", "DrinkTea");
notesStoreClass.addNote("active", "DrinkCoffee");
notesStoreClass.addNote("completed", "Study");
logger(notesStoreClass.getNotes("active"));
logger(notesStoreClass.getNotes("completed"));
logger(notesStoreClass.getNotes("others"));
// notesStoreClass.addNote("active");
logger(notesStoreClass.getNotes("foo"));
