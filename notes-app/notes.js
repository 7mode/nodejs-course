const fs = require('fs');
const chalk = require('chalk');
const jsonFileName = 'notes.json';

const getNotes = () => {
 return loadNotes();

};

const addNote = (title, body) => {
 const notes = loadNotes();
 const duplicatedNote  = notes.find((note) => note.title === title);

 if (!duplicatedNote) {
  notes.push({
   title: title,
   body: body
  });
  saveNotes(notes);
  console.log(chalk.green.inverse('New note add!'));
 } else {
  console.log(chalk.red.inverse('Note title taken!'));
 }
};

const removeNote = (title) => {
 const notes = loadNotes();
 const modifiedNotes = notes.filter((note) => note.title !== title);

 if (modifiedNotes.length === notes.length) {
  console.log(chalk.red.inverse('No note found!'));
 } else {
  saveNotes(modifiedNotes);
  console.log(chalk.green.inverse('Note removed!'));
 }
};

const listNotes = () => {
 const notes = loadNotes();

 console.log(chalk.inverse("Your notes"));
 notes.forEach((note) => {
  console.log(note.title)
 })
};

const readNote = (title) => {
 const notes = loadNotes();
 const note  = notes.find((note) => note.title === title);

 if (note) {
  console.log(chalk.inverse(note.title));
  console.log(note.body);
 } else {
  console.log(chalk.red.inverse('Note not found!'));
 }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
 fs.writeFileSync(jsonFileName, dataJSON);
};

const loadNotes = () => {
 try {
  const dataBuffer = fs.readFileSync(jsonFileName);
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
 } catch (e) {
  return []
 }
};

module.exports = {
 getNotes: getNotes,
 addNote: addNote,
 removeNote: removeNote,
 listNotes: listNotes,
 readNote: readNote
};