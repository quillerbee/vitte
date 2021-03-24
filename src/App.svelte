<script>
	import Counter from "@lib/Counter.svelte";
</script>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	img {
		height: 16rem;
		width: 16rem;
	}
	p {
		max-width: 14rem;
		margin: 1rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>

<main class="flex flex-col items-center">
	<img src="./assets/svelte.png" alt="Svelte Logo" />
	<h1 class="mb-5 text-5xl font-light text-red-500 uppercase">
		Hello World!
	</h1>

	<Counter id="0" />

	<p>
		Visit <a class="hover:underline" href="https://svelte.dev"
			>svelte.dev</a> to learn how to build Svelte apps.
	</p>

	<p>
		Check out
		<a
			class="hover:underline"
			href="https://github.com/sveltejs/kit#readme">
			SvelteKit
		</a>
		for the officially supported framework, also powered by Vite!
	</p>
</main>
