<script>
	import { getStore } from "./hmr-stores";
	/** @type { string } */
	export let id;

	const count = getStore(id, 0);
	const increment = () => {
		$count += 1;
	};
</script>

<style>
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: #ff3e00;
		background-color: rgba(255, 62, 0, 0.1);
		border-radius: 2em;
		border: 2px solid rgba(255, 62, 0, 0);
		outline: none;
		font-variant-numeric: tabular-nums;
	}

	button:focus {
		border: 2px solid #ff3e00;
	}

	button:active {
		background-color: rgba(255, 62, 0, 0.2);
	}
</style>

<button class="outline-none w-[150px] focus:outline-none hover:outline-none md:dark:hover:bg-yellow-200" id="{id}" on:click="{increment}">
	Clicks: {$count}
</button>
