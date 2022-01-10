export default {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
			useESM: true
		}
	},
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest'
	},
	transformIgnorePatterns: ['node_modules/(?!(@smui)/)'],
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': '<rootDir>/.svelte-kit/dev/runtime/app$1',
		'^(\\.{1,2}/.*)\\.js$': '$1'
	}
};
