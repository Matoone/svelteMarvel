import { writable } from 'svelte/store';

export const marvelMessage = writable<string>('');
