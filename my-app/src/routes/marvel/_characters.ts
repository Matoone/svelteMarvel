import type { ReadableQuery } from 'svelte-apollo-client';
import { client } from '../../config';
import { getCharacterDetails, getCharacters } from '../../queries';
import type {
	getCharacters as getCharactersQuery,
	getCharacterDetails as getCharacterDetailsQuery
} from './types';

const characters = client.query<getCharactersQuery>(getCharacters, {
	variables: {
		offset: 0,
		limit: 20
	}
});

const characterDetails: (id: string) => ReadableQuery<getCharacterDetailsQuery> = (id: string) =>
	client.query<getCharacterDetailsQuery>(getCharacterDetails, {
		variables: {
			id
		}
	});

export { characters, characterDetails };
