<script lang="ts">
	import { goto } from '../../.svelte-kit/dev/runtime/app/navigation';

	import Card, { Content, Media, MediaContent, PrimaryAction } from '@smui/card';
	enum ImageResolutions {
		sm = 'portrait_small',
		md = 'portrait_medium',
		l = 'portrait_xlarge',
		xl = 'portrait_fantastic',
		xxl = 'portrait_uncanny',
		xxxl = 'portrait_incredible'
	}

	interface CharacterImageData {
		url: string;
		extension: string;
	}

	const buildImageUrl = (
		imageData: CharacterImageData,
		quality: ImageResolutions = ImageResolutions.md
	): string => {
		return `${imageData.url}/${quality}.${imageData.extension}`;
	};
	export let character;
	$: imageUrl = buildImageUrl(character.image);
</script>

<div class="card-display">
	<div class="card-container" on:click={() => goto(`/marvel/${character.id}`)}>
		<Card>
			<PrimaryAction on:click={() => {}}>
				<Media
					class="card-media-square"
					aspectRatio="square"
					style="background-image: url({imageUrl}); background-size: auto 100%;"
				/>
				<Content class="mdc-typography--body2">
					{character.name}
				</Content>
			</PrimaryAction>
		</Card>
	</div>
</div>

<style>
	.card-display {
		width: 250px;
		margin-left: 4rem;
		margin-top: 2rem;
	}
</style>
