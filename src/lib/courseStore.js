// @ts-nocheck
import {writable} from 'svelte/store';

// @ts-ignore
function createCourses() {
        let og_courses =[
        {name: 'Backend-ohjelmointi', id:0, notes_count:0},
        {name: 'Ruotsin kirjallinen', id:1, notes_count:1},
        {name: 'Versionhallinta', id:2, notes_count:2},
        {name: 'Hallinnan automatisointi', id:3, notes_count:0}
    ]

    // @ts-ignore
    const { subscribe, set, update} = writable([]);

    const add_course = (course) => {
        update((courses) => {
            let id = courses.length;
            return [...courses,{id, ...course}]
        });
    };

    return {
        subscribe,
        // @ts-ignore
        add: add_course,
        reset: () => set([]),
        populate: (courses) => set(courses)
    };
}

export const courses = createCourses();