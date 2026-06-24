<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<p>Hello {data.word}!!!</p>

{#if data.version}
    <p style="position: fixed; bottom: 1rem; left: 1rem; font-size: 0.75rem;">
        {data.version}
    </p>
{/if}
