<script>
// @ts-nocheck

    // import {courses} from '$lib/courseStore.js';
	import { error, json } from '@sveltejs/kit';
    import Opintojaksot from "./opintojaksot.svelte";
    
    export let courses;

</script>

{#each $courses as course}
<Opintojaksot {...course} />
{/each}

<!-- {#await getCourses()}
    <p>Loading courses...</p>
{:then courses1} 
    {#each $courses as course}
    <Opintojaksot {...course} />
    {/each}    
{:catch error}
    <p>{error.message}</p>
{/await} -->
  


