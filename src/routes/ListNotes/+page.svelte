<script>
// @ts-nocheck

    import Header from "../Header.svelte";
    import {notes} from '$lib/noteStore.js';
    let options = ['Option 1', 'Option 2', 'Option 3'];
    // @ts-ignore
    let selectedOption;

    // @ts-ignore
    let note = "";
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

<!-- {#each $notes as note}
    < {...note} />
    
{/each} -->


