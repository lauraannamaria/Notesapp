<script>
// @ts-nocheck

    import {courses} from '$lib/courseStore.js';
    import Opintojaksot from "./opintojaksot.svelte";
</script>

{#each $courses as course}
    <Opintojaksot {...course} />
    
{/each}
