import {writable} from 'svelte/store';

// @ts-ignore
function createNotes() {
    // @ts-ignore
    const { subscribe, set, update} = writable([]);

    return {
        subscribe,
        // @ts-ignore
        add: (note) => update((notes) => [...notes, note])
    }
}

export const courses = createNotes();