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
    }
</script>

<div>
    <input bind:value={name} placeholder="Nimi"/>
    <input bind:value={id} placeholder="ID"/>
    <input type="number" bind:value={notes_count} placeholder="Notes count"/>
    <button on:click={saveCourse}>Save</button>
</div>
