<script>
    import Header from "../Header.svelte";;
    import CourseList from "../CourseList.svelte";
    import { courses } from "$lib/courseStore.js"
    import Nappi from "./saveCourses.svelte";

    export let data;

    if ($courses.length === 0) {
        courses.populate(data);
    }

</script>

<Header />

<h2>
    Add courses
</h2>

<Nappi />

<CourseList courses = {courses} />

<!-- {JSON.stringify(data, null, 2)} -->

<!-- <style>
    input{
        width: 30%;
        height: 40px;
        border: 1px solid black;
        border-radius: 15px;
        margin-bottom: 25px;
        padding: 5px;
    }

    .check{
        background-color: rgb(206, 184, 199);
        border: none;
        color: black;
        padding: 10px;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        border-radius: 50%;
    }
    button:hover{
        box-shadow: 0 12px 16px rgba(0,0,0,0,24), 0 17px 50px 0 rgba(0,0,0,0,19);
    }
</style> -->

