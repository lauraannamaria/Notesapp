<script>
	import { goto } from "$app/navigation";
	import CourseList from "./CourseList.svelte";
    import Opintojaksot from "./opintojaksot.svelte";
    
</script>

<main>
    <h2>Welcome to NotesApp!</h2>

    <button class="button2" on:click={()=> goto('./AddNotes')}>Create notes for class</button>
    
    <button class="button2" on:click={()=> goto('./ListNotes')}>List notes</button>
    
    <button class="button2" on:click={()=> goto('./Courses')}>Add courses</button>

</main>

<style>
    .button2{
        background-color: beige;
        border: none;
        color: black;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        border-radius: 12px;
        
    }
    button:hover{
        box-shadow: 0 12px 16px rgba(0,0,0,0,24), 0 17px 50px 0 rgba(0,0,0,0,19);
    }
</style>