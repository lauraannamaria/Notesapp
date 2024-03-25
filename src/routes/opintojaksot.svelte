<!-- Tää on se yks loopattava kurssi palikka -->

<script>
// @ts-nocheck
    import { courses } from "$lib/courseStore";
    export let name = '';
    export let id = '';
    export let notes_count = 0;
</script>


<a href={`/course/${id}`}>
    <div class="kurssipalikka">
        <h3>Course name: {name}</h3>
        <p>ID: {id}</p>
        
        {#if notes_count !== 0}
            <p>Notes: {notes_count}</p>
        {:else}
            <p>No notes for this course.</p>
        {/if}

    </div>
</a>




<style>
    .kurssipalikka {
        border: 1px solid black;
        margin-bottom: 1rem;
    }
</style>
