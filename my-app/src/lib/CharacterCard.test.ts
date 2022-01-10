import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Comp from './CharacterCard.svelte';

test('shows proper heading when rendered', () => {
	const { getByText } = render(Comp);

	expect(getByText('Hello World!')).toBeInTheDocument();
});
describe('Test if Jest is working', () => {
	test('Welcome', () => {});
});
