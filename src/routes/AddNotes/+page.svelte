<script>
  //  @ts-nocheck

    import Header from "../Header.svelte";

    let options = ['Option 1', 'Option 2', 'Option 3'];
    let selectedOption;

    let note = "";
</script>

<Header />

<h2>
    Add new notes for course
</h2>

<div>
    Course: 
    <select bind:value={selectedOption}>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>

    <p>Selected course: {selectedOption}</p>
</div>

<textarea on:input={(e) => note = e.target.value} rows="10" cols="50">
    Write your note here...
</textarea>

<div>
    <button>Submit</button>
    <button>Back</button>
</div>

<p>{note}</p>



<style>
    button{
        background-color: rgb(206, 184, 199);
        border: none;
        color: black;
        padding: 10px;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        border-radius: 20%;
    }
</style>