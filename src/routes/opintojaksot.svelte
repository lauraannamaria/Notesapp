<!-- Tää on se yks loopattava kurssi palikka -->

<script>
// @ts-nocheck
    import { courses } from "$lib/courseStore";
    export let name = '';
    export let id = '';
    export let notes_count = 0;
</script>

<!-- <div>
    <input bind:value={name} placeholder="Nimi"/>
    <button on:click={saveCourse}>Save</button>
</div> -->

<a href={`/course/${id}`}>
    <div class="kurssipalikka">
        <h3>Opintojakso: {name}</h3>
        <p>ID: {id}</p>
        
        {#if notes_count !== 0}
            <p>Muistiinpanot: {notes_count}</p>
        {:else}
            <p>Muistiinpanoja ei saatavilla.</p>
        {/if}

    </div>
</a>




<style>
    .kurssipalikka {
        border: 1px solid black;
        margin-bottom: 1rem;
    }
</style>
