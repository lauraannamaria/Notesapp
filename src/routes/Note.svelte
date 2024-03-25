<script>
	import { courses } from "$lib/courseStore";
    import {notes} from "$lib/noteStore.js";

    export let id = '';
    export let text = '';
    export let course = courses;
    export let timestamp = '';
</script>

<a href={`/note/${id}`}>
    <div>
        <h3>Course: {course}</h3>
        <p>ID: {id}</p>
        <p>{text}</p>
        <p>{timestamp}</p>
    </div>
</a>