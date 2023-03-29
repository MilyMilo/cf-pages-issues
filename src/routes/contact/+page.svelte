<script lang="ts">
    import type { ActionData } from "./$types";

    export let form: ActionData | null = null;
</script>

<h1>Contact Page</h1>

{#if form && form.success}
    <p>Success Alert!</p>
{:else if form && !form.success}
    <p>Failure Alert!</p>
{/if}

<form action="/contact" method="POST">
    <input type="text" name="name">
    <input type="submit" value="Submit">
</form>