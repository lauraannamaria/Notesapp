<script>
// @ts-nocheck

    import Header from "../Header.svelte";
    import { notes } from '$lib/noteStore.js';
    import Muistiinpanot from "../Note.svelte";
	import { courses } from "$lib/courseStore";

    export let data2;
    
    let options = [notes];
    // @ts-ignore
    let selectedOption;

    if ($notes.length === 0) {
        notes.populate(data2);
    }

    // @ts-ignore
</script>

<Header />

<h2>Scroll through your notes here</h2>

<div>
    Course: 
    <select bind:value={selectedOption}>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>

    <p>Selected course: {selectedOption}</p>
</div>



{#each $notes as note}
    <Muistiinpanot {...note} />
{/each}


