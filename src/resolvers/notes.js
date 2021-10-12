/** @format */

//import { v4 as uuidv4 } from "uuid";
import { v4 as uuidv4 } from "uuid";

export default {
  Query: {
    notes: (parent, args, { models }) => {
      return Object.values(models.notes);
    },
    note: (parent, { id }, { models }) => {
      return models.notes[id];
    }
  },
  Mutation: {
    createNewNote: (parent, { text }, { models }) => {
      const id = uuidv4();
      const newNote = {
        id,
        text
      };
      models.notes[id] = newNote;
      return newNote;
    },

    deleteNote: (parent, { id }, { models }) => {
      const { [id]: note, ...otherNotes } = models.notes;
      if (!note) {
        return false;
      }
      models.notes = otherNotes;
      return true;
    },
    updateNote: (parent, { id, text }, { models }) => {
      //const { id, text } = args;
      const updatedNote = {
        id,
        text
      };
      models.notes[id] = updatedNote;
      return updatedNote;
    }
  }
};
