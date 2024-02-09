<script>
    import { courses } from "$lib/courseStore.js";
    import CourseList from "../CourseList.svelte";
    import Opintojaksot from "../opintojaksot.svelte";

    export let name = '';
    export let id = '';
    export let notes_count = 0;

    function saveCourse() {
        let course = { name, id, notes_count };
        courses.add(course);
        name = '';
        id = '';
        notes_count = 0; // Aseta notes_count numeroksi
    }
</script>

<div>
    <input bind:value={name} placeholder="Nimi"/>
    <button on:click={saveCourse}>Save</button>
</div>
