<script lang="ts">
	import Header from '@components/Header.svelte';
	import Paper, { Content } from '@smui/paper';
	import '../app.css'; // FIXME: Do i need this?

	let { children } = $props();
	const year = new Date().getFullYear();
</script>

<!-- Default to dark theme -->
<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<Paper color="primary">
			<Content
				><small>Copyright &copy; {JSON.stringify(year)}, RetroSet. All Rights Reserved</small
				></Content
			>
		</Paper>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
