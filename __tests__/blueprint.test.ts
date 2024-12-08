import { describe, expect, test } from 'bun:test';

describe('Blueprint', () => {
	test('implement tests.', () => {
		expect(import.meta.dir.includes('project-blueprint')).toBeTrue();
	});
});
