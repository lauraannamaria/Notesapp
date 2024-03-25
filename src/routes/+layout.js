// export async function load({fetch}) {
//     console.log('layout.js')
//     const res = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses');
//     const courses = await res.json();
//     return {courses};
// }

import { courses } from "$lib/courseStore.js";
import { notes } from "$lib/noteStore.js";


// let courses = [];
async function getCourses(){
    const res = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses');

    if (res.ok){
        const data = await res.json();
        courses.populate(data);
        return data;
    } else {
        throw new Error('Failed to fetch courses');
    }
}

getCourses();

async function getNotes(){
    const res2 = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes');

    if (res2.ok){
        const data2 = await res2.json();
        notes.populate(data2);
        return data2;
    } else{
        throw new Error('Failed to fetch notes');
    }
}

getNotes();



// export async function load ({fetch}) {
//     console.log('layout.js');

//     const res1 = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses');
//     const courses = await res1.json();

//     return {courses};
// }