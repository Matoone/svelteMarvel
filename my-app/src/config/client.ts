import { InMemoryCache } from '@apollo/client/core';
import { SvelteApolloClient } from 'svelte-apollo-client';

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const backendUri =
	ENVIRONMENT === 'production'
		? 'https://ec2-13-38-1-89.eu-west-3.compute.amazonaws.com:443/graphql'
		: 'http://localhost:4000/graphql';

export const client = SvelteApolloClient({
	uri: backendUri,
	cache: new InMemoryCache()
});
