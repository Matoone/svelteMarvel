<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import { buildImageUrl, ImageResolutions } from '../utils/buildImageUrl';
	export let character;
</script>

<div class="paper-container">
	<Paper color="accent">
		<Title style="text-align: center;">{character.name}</Title>
		<Content>
			<div class="content">
				<div>
					{character.description ?? ''}
				</div>
				<img
					style="height: 800px"
					src={buildImageUrl(character.image, ImageResolutions.xl)}
					alt="the character"
				/>
				<div>
					This character appears in {character.comics?.appearances} comics globally.
				</div>
				<div>
					<ol>
						{#each character.comics?.items as comic}
							<li>{comic.name}</li>
						{/each}
					</ol>
				</div>
			</div>
		</Content>
	</Paper>
</div>

<style>
	img {
		align-self: center;
	}

	.content {
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	div,
	img {
		margin-bottom: 20px;
	}
</style>
