<script>
// @ts-nocheck

    import { courses } from '$lib/courseStore.js';
	import CourseList from '../../CourseList.svelte';
    export let data;

    // let course = $courses[+data.id];
    let course = $courses.find(b => b.id === +data.id)
</script>

<h1>Kurssinäkymä</h1>

<CourseList {...course} />

<pre>
    {JSON.stringify(data, null, 2)}
</pre>
<pre>
    {JSON.stringify(course, null, 2)}
</pre>