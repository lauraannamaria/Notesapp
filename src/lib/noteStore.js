// @ts-nocheck
import {writable} from 'svelte/store';

// @ts-ignore
function createNotes() {
    // @ts-ignore
    const { subscribe, set, update} = writable([]);

    const add_note = (note) => {
        update((notes) => {
            let id = notes.length;
            return [...notes,{id, ...note}]
        });
    }
    return {
        subscribe,
        // @ts-ignore
        add: add_note,
        reset: () => set([]),
        populate: (notes) => set (notes)
    };
}

export const notes = createNotes();