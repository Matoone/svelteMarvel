<script lang="ts">
	import { page } from '$app/stores';
	import { characterDetails } from './_characters';
	import CharacterDetails from '$lib/CharacterDetails.svelte';
	import { marvelMessage } from '../../stores/marvelMessage';
	$: cDetails = characterDetails($page.params.id);
</script>

<div>
	{#if $cDetails}
		{#if $cDetails.loading}
			<p>Loading...</p>
		{:else if $cDetails.error}
			<p>
				Error: {$cDetails.error}
			</p>
		{:else if $cDetails.data.character}
			<p style="text-align: center;">{$marvelMessage}</p>
			<div class="box">
				<CharacterDetails character={$cDetails.data.character} />
			</div>
		{/if}
	{/if}
</div>

<style>
	p {
		font-size: x-large;
	}
</style>
