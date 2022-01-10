<script lang="ts">
	import { characters } from './_characters';
	import CharacterCard from '$lib/CharacterCard.svelte';
	import { marvelMessage } from '../../stores/marvelMessage';

	const onLoadMore = () => {
		characters.fetchMore({
			variables: {
				offset: $characters.data.characters.characters.length
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return Object.assign({}, prev, {
					characters: {
						characters: [
							...prev.characters?.characters,
							...fetchMoreResult.characters.characters.filter(
								(character) => !prev.characters.characters.some((el) => el.id === character.id)
							)
						],
						hasMore: fetchMoreResult.characters.hasMore,
						marvelMessage: prev.characters?.marvelMessage
					}
				});
			}
		});
	};
	const onScroll = (e: Event) => {
		const isEnd =
			document.documentElement.scrollHeight - document.documentElement.scrollTop <=
			document.documentElement.clientHeight + 100;
		if (isEnd && $characters.data.characters.hasMore) {
			onLoadMore();
		}
	};
</script>

<svelte:window on:scroll={onScroll} />

<div>
	{#if characters}
		{#if $characters.loading}
			<p>Loading...</p>
		{:else if $characters.error}
			<p>
				Error: {$characters.error}
			</p>
		{:else if $characters.data.characters}
			{#if $marvelMessage === '' && $characters.data.characters.marvelMessage}
				{marvelMessage.set($characters.data.characters.marvelMessage)}
			{/if}
			<p style="text-align: center;">{$marvelMessage}</p>
			<div class="box">
				{#each $characters.data.characters.characters as character}
					<CharacterCard {character} />
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.box {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
	}

	p {
		font-size: x-large;
	}
</style>
