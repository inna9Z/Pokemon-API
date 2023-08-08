/**
 * @jest-environment jsdom
 */

import createPost from './createPost.js';

describe('createPost', () => {
    test('creates a container with the correct class', () => {
        const post = { title: 'Test Title', body: 'Test Body' };
        const container = createPost(post);

        expect(container.className).toEqual('container');
    });

    test('check the first child h2', () => {
        const post = { title: 'Test Title', body: 'Test Body' };
        const container = createPost(post);
        const firstChild = container.children[0];
        const secondChild = container.children[1];

        expect(firstChild.innerText).toEqual('Test Title');
        expect(secondChild.innerText).toEqual('Test Body');
    });
});
