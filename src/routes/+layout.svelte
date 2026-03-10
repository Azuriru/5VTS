<script lang="ts">
    import type { Snippet } from 'svelte';
    import '../app.css';

    let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
    <title>5velte + TS</title>
    <meta name="description" content="Sveltekit + TS boilerplate" />
</svelte:head>

<div class="app">
    {@render children()}
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>