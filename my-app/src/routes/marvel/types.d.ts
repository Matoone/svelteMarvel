export interface getCharacters_characters_characters_image {
	__typename: 'ImageResult';
	url: string;
	extension: string;
}

export interface getCharacters_characters_characters {
	__typename: 'Character';
	id: string;
	name: string;
	image: getCharacters_characters_characters_image;
}

export interface getCharacters_characters {
	__typename: 'CharactersResponse';
	hasMore: boolean;
	marvelMessage: string | null;
	characters: getCharacters_characters_characters[];
}

export interface getCharacters {
	characters: getCharacters_characters;
}

export interface getCharactersVariables {
	offset: number;
	limit: number;
	name?: string | null;
}

export interface getCharacterDetails_character_image {
	__typename: 'ImageResult';
	url: string;
	extension: string;
}

export interface getCharacterDetails_character_comics_items {
	__typename: 'Comic';
	name: string;
}

export interface getCharacterDetails_character_comics {
	__typename: 'ComicsData';
	appearances: number | null;
	items: getCharacterDetails_character_comics_items[] | null;
}

export interface getCharacterDetails_character {
	__typename: 'Character';
	id: string;
	name: string;
	image: getCharacterDetails_character_image;
	description: string | null;
	comics: getCharacterDetails_character_comics | null;
}

export interface getCharacterDetails {
	character: getCharacterDetails_character;
}

export interface getCharacterDetailsVariables {
	id: string;
}
